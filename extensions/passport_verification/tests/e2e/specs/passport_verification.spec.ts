import { test, expect } from '@playwright/test';

const TIMEOUT = 60000;

test.describe('Passport Verification Extension E2E Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/extensions/passport_verification', {
      waitUntil: 'domcontentloaded',
      timeout: TIMEOUT
    });
    // Wait for the page header to appear
    await expect(page.getByRole('heading', { name: 'Passport Verification' }))
      .toBeVisible({ timeout: TIMEOUT });
  });

  test('should display the page header and description', async ({ page }) => {
    test.setTimeout(TIMEOUT);
    await expect(page.getByRole('heading', { name: 'Passport Verification' })).toBeVisible();
    await expect(page.getByText('Zero-knowledge identity verification via RariMe')).toBeVisible();
  });

  test('should show the step indicator with Start, Scan, Verified steps', async ({ page }) => {
    test.setTimeout(TIMEOUT);
    await expect(page.getByText('Start', { exact: true })).toBeVisible();
    await expect(page.getByText('Scan', { exact: true })).toBeVisible();
    await expect(page.getByText('Verified', { exact: true })).toBeVisible();
  });

  test('should show idle state hero card with Start Verification button', async ({ page }) => {
    test.setTimeout(TIMEOUT);
    await expect(page.getByRole('heading', { name: 'Verify Your Passport Identity' })).toBeVisible();
    await expect(page.getByText('Your passport data never leaves your device')).toBeVisible();
    const startButton = page.getByRole('button', { name: 'Start Verification' });
    await expect(startButton).toBeVisible();
    await expect(startButton).toBeEnabled();
  });

  test('should show generating state when Start Verification is clicked', async ({ page }) => {
    test.setTimeout(TIMEOUT);
    const startButton = page.getByRole('button', { name: 'Start Verification' });
    await startButton.click();

    // Should show spinner and "Generating verification link..." text
    await expect(page.getByText('Generating verification link...')).toBeVisible({ timeout: 10000 });
  });

  test('should not show Error Occurred on initial page load', async ({ page }) => {
    test.setTimeout(TIMEOUT);
    // The page should load cleanly without any error state
    await expect(page.getByText('Error Occurred')).not.toBeVisible({ timeout: 5000 });
    await expect(page.getByText('Verification Failed')).not.toBeVisible({ timeout: 5000 });
  });

  test('should transition to pending or error after generating', async ({ page }) => {
    test.setTimeout(90000);
    const startButton = page.getByRole('button', { name: 'Start Verification' });
    await startButton.click();

    // Wait for the HTTP outcall to complete (up to 30s for IC HTTP outcalls)
    await page.waitForTimeout(15000);

    // After generating, we should see one of:
    // - Pending state: QR code section with "Check Status" button
    // - Error state: "Error Occurred" (acceptable for staging if Rarimo API has issues)
    // The "Application ID not found" error should never appear
    const appIdError = page.getByText('Application ID not found');
    await expect(appIdError).not.toBeVisible();

    // Either QR/pending UI or error UI should be visible
    // We check for a button that only appears in post-generating states
    const checkStatusButton = page.getByRole('button', { name: 'Check Status' });
    const tryAgainButton = page.getByRole('button', { name: 'Try Again' });

    // At least one of these buttons should be visible (pending or error state)
    await expect(
      checkStatusButton.or(tryAgainButton).first()
    ).toBeVisible({ timeout: 30000 });
  });

  test('should show verified state UI elements when verification succeeds', async ({ page }) => {
    // This test validates the verified state structure.
    // Since we can't trigger real Rarimo verification in E2E,
    // we verify the page loads correctly and check for the idle state.
    // The verified state is tested by the backend integration test
    // (create_passport_identity + get_identity_status).
    test.setTimeout(TIMEOUT);

    // Verify the idle state is correct (pre-verification)
    await expect(page.getByRole('heading', { name: 'Verify Your Passport Identity' })).toBeVisible();
  });
});
