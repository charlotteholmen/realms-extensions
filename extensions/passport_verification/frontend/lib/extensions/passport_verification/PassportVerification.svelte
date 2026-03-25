<script lang="ts">
  import { backend } from '$lib/canisters.js';
  import { Button, Card, Heading, P, Spinner } from 'flowbite-svelte';
  import { CheckCircleSolid, ExclamationCircleSolid, ClipboardListSolid } from 'flowbite-svelte-icons';
  import { styles, cn } from '../../theme/utilities';
  
  export let userId: string = '';
  
  let verificationStatus = 'idle'; // idle, generating, pending, verified, failed, error
  let verificationLink = '';
  let qrCodeData = '';
  let errorMessage = '';
  let verificationResult: any = null;
  let sessionId = '';
  let eventId = '';
  let copied = false;
  let checkingStatus = false;
  let showDetails = false;

  $: currentStep = verificationStatus === 'idle' ? 0
    : verificationStatus === 'generating' ? 1
    : verificationStatus === 'pending' ? 2
    : 3;

  
  async function generateVerificationLink() {
    try {
      verificationStatus = 'generating';
      errorMessage = '';
      
      console.log('Generating passport verification for user:', userId);
      
      // Get event_id from backend
      const eventIdResponse = await backend.extension_sync_call({
        extension_name: "passport_verification",
        function_name: "get_current_application_id",
        args: ""
      });
      
      if (eventIdResponse.success) {
        const eventIdData = JSON.parse(eventIdResponse.response);
        eventId = eventIdData.application_id || '';
      }
      
      const response = await backend.extension_async_call({
        extension_name: "passport_verification",
        function_name: "get_verification_link",
        args: userId || ""
      });
      
      if (response.success) {
        const result = JSON.parse(response.response);
        console.log('Verification link result:', result);
        
        if (result.data && result.data.attributes) {
          const verificationUrl = result.data.attributes.rarime_app_url || result.data.attributes.get_proof_params;
          verificationLink = verificationUrl;
          qrCodeData = generateQRCodeData(verificationUrl);
          sessionId = result.data.id || userId;
          verificationStatus = 'pending';
        } else {
          verificationStatus = 'error';
          errorMessage = 'Invalid response format from verification service';
        }
      } else {
        verificationStatus = 'error';
        errorMessage = response.response || 'Backend error occurred';
      }
    } catch (error: any) {
      console.error('Error generating verification link:', error);
      verificationStatus = 'error';
      errorMessage = error.message || 'Network error occurred';
    }
  }
  
  function generateQRCodeData(link: string) {
    // For now, return the link itself - in a real implementation, 
    // this would generate a proper QR code image URL
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(link)}`;
  }
  
  async function checkVerificationStatus() {
    try {
      checkingStatus = true;
      const response = await backend.extension_async_call({
        extension_name: "passport_verification",
        function_name: "check_verification_status",
        args: userId || ""
      });
      
      if (response.success) {
        const result = JSON.parse(response.response);
        console.log('Verification status result:', result);
        
        if (result.data && result.data.attributes) {
          const status = result.data.attributes.status;
          if (status === 'verified') {
            verificationStatus = 'verified';
            verificationResult = result.data.attributes;
            
            await createPassportIdentity(result);
          } else if (status === 'failed') {
            verificationStatus = 'failed';
            errorMessage = 'Passport verification failed';
          }
        } else {
          console.warn('Unexpected response format:', result);
        }
      }
    } catch (error) {
      console.error('Error checking verification status:', error);
    } finally {
      checkingStatus = false;
    }
  }
  
  async function createPassportIdentity(verificationData: any) {
    try {
      const response = await backend.extension_sync_call({
        extension_name: "passport_verification",
        function_name: "create_passport_identity",
        args: JSON.stringify(verificationData)
      });
      
      if (response.success) {
        const result = JSON.parse(response.response);
        console.log('Identity creation result:', result);
        
        if (!result.success) {
          console.warn('Identity creation failed:', result.error);
        }
      }
    } catch (error) {
      console.error('Error creating passport identity:', error);
    }
  }
  
  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(verificationLink);
      copied = true;
      setTimeout(() => { copied = false; }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }

  function resetVerification() {
    verificationStatus = 'idle';
    verificationLink = '';
    qrCodeData = '';
    errorMessage = '';
    verificationResult = null;
    sessionId = '';
    eventId = '';
    copied = false;
    showDetails = false;
  }
</script>

<div class="p-6 max-w-2xl mx-auto space-y-6">
  <!-- Page Header -->
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
      <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    </div>
    <div>
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Passport Verification</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400">Zero-knowledge identity verification via RariMe</p>
    </div>
  </div>

  <!-- Step Indicator -->
  {#if verificationStatus !== 'error' && verificationStatus !== 'failed'}
    <div class="flex items-center justify-between">
      {#each [{ label: 'Start', step: 0 }, { label: 'Scan', step: 2 }, { label: 'Verified', step: 3 }] as { label, step }, i}
        <div class="flex items-center {i < 2 ? 'flex-1' : ''}">
          <div class="flex flex-col items-center">
            <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
              {currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}">
              {#if currentStep > step}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
              {:else}
                {i + 1}
              {/if}
            </div>
            <span class="text-xs mt-1 {currentStep >= step ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-400 dark:text-gray-500'}">{label}</span>
          </div>
          {#if i < 2}
            <div class="flex-1 h-0.5 mx-3 mb-5 {currentStep > step ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}"></div>
          {/if}
        </div>
      {/each}
    </div>
  {/if}

  <!-- IDLE STATE: Hero card -->
  {#if verificationStatus === 'idle'}
    <div class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center">
      <div class="w-16 h-16 mx-auto mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
        <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      </div>
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Verify Your Passport Identity</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
        Use zero-knowledge proofs to verify your passport securely and privately. Your passport data never leaves your device.
      </p>
      <Button on:click={generateVerificationLink} class={cn(styles.button.primary(), "px-8 py-3 text-base")}>
        Start Verification
      </Button>
    </div>

  <!-- GENERATING STATE -->
  {:else if verificationStatus === 'generating'}
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-12 text-center">
      <Spinner class="mx-auto mb-4" size="8" />
      <p class="text-gray-600 dark:text-gray-400 font-medium">Generating verification link...</p>
      <p class="text-sm text-gray-400 dark:text-gray-500 mt-1">This may take a few seconds</p>
    </div>

  <!-- PENDING STATE: QR Code card -->
  {:else if verificationStatus === 'pending'}
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-6 py-3">
        <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Scan the QR code with your RariMe app to verify your passport</p>
      </div>

      <div class="p-6 text-center">
        {#if qrCodeData}
          <div class="inline-block bg-white p-4 rounded-xl shadow-lg border border-gray-100 mb-4">
            <img src={qrCodeData} alt="Passport Verification QR Code" class="block" />
          </div>
        {/if}

        {#if verificationLink}
          <div class="flex items-center justify-center gap-2 flex-wrap mb-6">
            <a href={verificationLink} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              Open verification link
            </a>
            <Button size="xs" color="alternative" on:click={copyToClipboard} class="inline-flex items-center gap-1 whitespace-nowrap">
              {#if copied}
                <CheckCircleSolid class="w-3.5 h-3.5 text-green-500" />
                Copied!
              {:else}
                <ClipboardListSolid class="w-3.5 h-3.5" />
                Copy link
              {/if}
            </Button>
          </div>
        {/if}

        <div class="bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4 text-left">
          <p class="text-sm text-blue-800 dark:text-blue-300">
            Open your RariMe app and scan the QR code above. Once you have submitted the proof from your phone, press <strong>Check Status</strong> below.
          </p>
        </div>
      </div>

      <!-- Collapsible technical details -->
      {#if sessionId || eventId}
        <div class="border-t border-gray-200 dark:border-gray-700">
          <button
            on:click={() => showDetails = !showDetails}
            class="w-full px-6 py-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <span>Technical Details</span>
            <svg class="w-4 h-4 transition-transform {showDetails ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          {#if showDetails}
            <div class="px-6 pb-4 space-y-1">
              {#if sessionId}
                <p class="text-xs text-gray-500 dark:text-gray-400 font-mono break-all">
                  <strong>Session ID:</strong> {sessionId}
                </p>
              {/if}
              {#if eventId}
                <p class="text-xs text-gray-500 dark:text-gray-400 font-mono break-all">
                  <strong>Event ID:</strong> {eventId}
                </p>
              {/if}
            </div>
          {/if}
        </div>
      {/if}

      <!-- Action buttons footer -->
      <div class="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-6 py-4 flex gap-3 justify-center">
        <Button on:click={checkVerificationStatus} class={styles.button.primary()} disabled={checkingStatus}>
          {#if checkingStatus}
            <Spinner class="mr-2" size="4" />
            Checking...
          {:else}
            Check Status
          {/if}
        </Button>
        <Button color="alternative" on:click={resetVerification}>
          Cancel
        </Button>
      </div>
    </div>

  <!-- VERIFIED STATE: Green gradient card -->
  {:else if verificationStatus === 'verified'}
    <div class="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
      <div class="w-16 h-16 mx-auto mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
        <CheckCircleSolid class="w-8 h-8 text-green-500" />
      </div>
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Passport Verified Successfully!</h2>

      {#if verificationResult}
        <div class="bg-white/60 dark:bg-gray-800/60 rounded-lg p-4 mb-4 max-w-sm mx-auto text-left space-y-2">
          <div>
            <p class="text-xs text-gray-500 dark:text-gray-400">Citizenship</p>
            <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">{verificationResult.citizenship || 'Verified'}</p>
          </div>
          {#if verificationResult.verified_at}
            <div>
              <p class="text-xs text-gray-500 dark:text-gray-400">Verified</p>
              <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">{new Date(verificationResult.verified_at).toLocaleString()}</p>
            </div>
          {/if}
        </div>
      {/if}

      <p class="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
        Your passport identity has been securely linked to your account using zero-knowledge proofs.
      </p>
    </div>

  <!-- FAILED STATE -->
  {:else if verificationStatus === 'failed'}
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 text-center">
      <div class="w-16 h-16 mx-auto mb-4 bg-red-50 dark:bg-red-950 rounded-full flex items-center justify-center">
        <ExclamationCircleSolid class="w-8 h-8 text-red-500" />
      </div>
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Verification Failed</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        Passport verification was not successful. Please try again.
      </p>
      <Button on:click={resetVerification} class={cn(styles.button.primary())}>
        Try Again
      </Button>
    </div>

  <!-- ERROR STATE -->
  {:else if verificationStatus === 'error'}
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 text-center">
      <div class="w-16 h-16 mx-auto mb-4 bg-red-50 dark:bg-red-950 rounded-full flex items-center justify-center">
        <ExclamationCircleSolid class="w-8 h-8 text-red-500" />
      </div>
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Error Occurred</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        {errorMessage}
      </p>
      <Button on:click={resetVerification} class={cn(styles.button.primary())}>
        Try Again
      </Button>
    </div>
  {/if}
</div>
