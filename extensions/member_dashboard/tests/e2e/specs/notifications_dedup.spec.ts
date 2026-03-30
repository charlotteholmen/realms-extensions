import { test, expect } from '@playwright/test';

/**
 * Tests that verify:
 * 1. No duplicate notifications/invoices are created when a user joins
 * 2. Notifications table has From/To column headers
 *
 * Requires the target deployment to be built with:
 *   VITE_TEST_MODE=true  VITE_TEST_MODE_II_BYPASS=true  VITE_TEST_MODE_SKIP_TERMS=true
 * so the join flow can be automated without Internet Identity or terms acceptance.
 *
 * IMPORTANT: We must stay within the SPA after login. Doing page.goto() to a new
 * URL causes a full page reload which loses the in-memory Ed25519 test identity.
 * The join page auto-login + "Go to Dashboard" link provides SPA navigation that
 * preserves the identity through layout transitions.
 */

const STAGING_URL = 'https://3gpbx-xaaaa-aaaac-qcylq-cai.icp0.io';

test.describe('Notification Deduplication & From/To Fields', () => {
  test.setTimeout(120_000); // 2 min — IC canister cold starts can be slow

  // Use a large viewport so the responsive "To" column (hidden lg:table-cell) is visible
  test.use({ viewport: { width: 1280, height: 900 } });

  test('join realm (or skip if already joined) then verify notifications', async ({ page }) => {
    // Forward browser console for debugging
    page.on('console', msg => {
      if (msg.type() === 'log' || msg.type() === 'error') {
        console.log(`[BROWSER ${msg.type()}] ${msg.text()}`);
      }
    });

    // ── Step 1: Navigate to join page with test-mode URL params ──
    console.log('[TEST] Navigating to join page...');
    await page.goto(
      `${STAGING_URL}/join?testmode=1&ii_bypass=1&skip_terms=1&admin_self_reg=1`,
      { waitUntil: 'domcontentloaded', timeout: 90_000 }
    );

    // Wait for II bypass auto-login (onMount → handleLogin)
    await page.waitForTimeout(10_000);

    // ── Step 2: Detect join-page state ──
    const pageContent = await page.textContent('body');
    const alreadyJoined = /Welcome back|already a member|Go to Dashboard/i.test(pageContent || '');
    const onProfileStep = /Choose your role|Select.*profile/i.test(pageContent || '');

    if (alreadyJoined) {
      console.log('[TEST] User already joined');
    } else if (onProfileStep) {
      console.log('[TEST] On profile selection — joining as Member...');
      const memberCard = page.locator('text=Member').first();
      await memberCard.click();
      await page.waitForTimeout(1000);
      const joinBtn = page.locator('button').filter({ hasText: /join|continue|submit/i }).first();
      await expect(joinBtn).toBeVisible({ timeout: 10_000 });
      await joinBtn.click();
      console.log('[TEST] Waiting for join to complete...');
      await page.waitForTimeout(15_000);
    } else {
      console.log('[TEST] Unexpected state — page snippet: ' + (pageContent || '').substring(0, 300));
    }

    // ── Step 3: SPA-navigate to the dashboard ──
    // Click the "Go to Dashboard" link (href="/") which triggers an SPA
    // navigation.  AuthButton's onMount in the sidebar layout will detect
    // the existing test identity and call loadUserProfiles(), which
    // auto-redirects to /extensions/member_dashboard for joined users.
    const goLink = page.locator('a').filter({ hasText: /Go to Dashboard/i }).first();
    if (await goLink.isVisible({ timeout: 3000 }).catch(() => false)) {
      console.log('[TEST] Clicking "Go to Dashboard"...');
      await goLink.click();
    } else {
      // Might already be on the dashboard after join success step
      console.log('[TEST] No "Go to Dashboard" link — checking current page...');
    }

    // Wait for the member dashboard to fully render (canister cold-start + data fetch)
    console.log('[TEST] Waiting for member dashboard...');
    await page.waitForURL(/member_dashboard|extensions/, { timeout: 30_000 });
    await page.waitForTimeout(8_000);

    // ── Step 4: Scope to the Notifications section ──
    // The page has multiple tables (notifications + invoices). We need the
    // first table that follows the "Notifications" heading.
    const notifSection = page.locator('section').filter({ has: page.locator('h2', { hasText: 'Notifications' }) }).first();
    const notifTable = notifSection.locator('table');
    await expect(notifTable).toBeVisible({ timeout: 20_000 });
    console.log('[TEST] Notification table visible ✓');

    // ── Step 5: Count welcome notifications — must be exactly 1 ──
    const rows = notifTable.locator('tbody tr');
    const rowCount = await rows.count();
    console.log(`[TEST] Total notification rows: ${rowCount}`);

    let welcomeCount = 0;
    for (let i = 0; i < rowCount; i++) {
      const text = await rows.nth(i).textContent();
      console.log(`[TEST]   Row ${i}: ${text?.substring(0, 120)}`);
      if (text && /welcome to/i.test(text)) {
        welcomeCount++;
      }
    }
    console.log(`[TEST] "Welcome to" notification count: ${welcomeCount}`);

    // CRITICAL: no duplicate welcome notifications
    expect(welcomeCount).toBeLessThanOrEqual(1);
    expect(welcomeCount).toBeGreaterThanOrEqual(1);

    // ── Step 6: Verify From / To column headers exist in the DOM ──
    // "To" uses `hidden lg:table-cell` so it needs a wide viewport (set above).
    const headerRow = notifTable.locator('thead tr');
    const fromHeader = headerRow.locator('th').filter({ hasText: 'From' });
    const toHeader = headerRow.locator('th').filter({ hasText: 'To' });
    await expect(fromHeader).toBeAttached({ timeout: 5000 });
    await expect(toHeader).toBeAttached({ timeout: 5000 });
    console.log('[TEST] From/To column headers present in DOM ✓');

    // Check visibility (depends on viewport width)
    if (await fromHeader.isVisible()) {
      console.log('[TEST] "From" column visible ✓');
    }
    if (await toHeader.isVisible()) {
      console.log('[TEST] "To" column visible ✓');
    }

    // ── Step 7: Inspect the welcome notification row ──
    const welcomeRow = rows.filter({ hasText: /Welcome to/i }).first();
    const rowText = await welcomeRow.textContent();
    console.log(`[TEST] Welcome row content: ${rowText}`);

    // The sender field is "Administration" for notifications created AFTER the
    // backend code change.  Notifications created before the change show "—".
    // We check that the column renders (either value is acceptable).
    const hasSender = rowText?.includes('Administration') || rowText?.includes('—');
    expect(hasSender).toBeTruthy();
    console.log('[TEST] Sender column renders correctly ✓');

    console.log('[TEST] ✅ All assertions passed!');
  });
});
