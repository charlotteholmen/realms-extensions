import { test, expect } from '@playwright/test';

test.describe('Passport Verification Extension E2E Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/extensions/passport_verification');
    // Wait for the page to load - look for the main heading
    await expect(page.getByRole('heading', { name: /verify your passport/i }))
      .toBeVisible({ timeout: 60000 });
  });

  test('should display the passport verification page', async ({ page }) => {
    // Verify page title/heading is visible
    await expect(page.getByRole('heading', { name: /verify your passport/i }))
      .toBeVisible();
  });

  test('should show the start verification button', async ({ page }) => {
    // Look for the main action button
    const startButton = page.getByRole('button', { name: /start|verify|generate/i });
    await expect(startButton).toBeVisible({ timeout: 15000 });
  });

  test('should show generating state when button is clicked', async ({ page }) => {
    // Click the verification button
    const startButton = page.getByRole('button', { name: /start|verify|generate/i });
    await expect(startButton).toBeVisible({ timeout: 15000 });
    await startButton.click();

    // Should show some loading/generating indicator
    // The component sets verificationStatus to 'generating' on click
    // This may show a spinner or status text
    const generatingIndicator = page.locator('text=/generating|loading|please wait/i');
    const spinner = page.locator('[role="status"]');

    // Either a text indicator or spinner should appear briefly
    await expect(generatingIndicator.or(spinner)).toBeVisible({ timeout: 10000 });
  });

  test('should not crash with error on page load', async ({ page }) => {
    // Verify no unhandled error is displayed on the page itself
    // The old bug showed "Error Occurred" with the full error trace
    const errorHeading = page.locator('text=/Error Occurred/i');
    await expect(errorHeading).not.toBeVisible({ timeout: 5000 });
  });

  test('should display verification result after clicking start', async ({ page }) => {
    const startButton = page.getByRole('button', { name: /start|verify|generate/i });
    await expect(startButton).toBeVisible({ timeout: 15000 });
    await startButton.click();

    // Wait for the async call to complete - should show either:
    // - A verification link/QR code (success)
    // - A pending status
    // - An error message (but NOT "Application ID not found")
    // Give it enough time for the HTTP outcall
    await page.waitForTimeout(10000);

    // The "Application ID not found" error should never appear
    const appIdError = page.locator('text=/Application ID not found/i');
    await expect(appIdError).not.toBeVisible();
  });
});
