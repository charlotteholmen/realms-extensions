import { test, expect } from '@playwright/test';

const TIMEOUT = 60000;

test.describe('System Info Extension E2E Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/extensions/system_info', {
      waitUntil: 'domcontentloaded',
      timeout: TIMEOUT
    });
    await expect(page.getByRole('heading', { name: 'System Info' }))
      .toBeVisible({ timeout: TIMEOUT });
  });

  test('should display the page header and description', async ({ page }) => {
    test.setTimeout(TIMEOUT);
    await expect(page.getByRole('heading', { name: 'System Info' })).toBeVisible();
    await expect(page.getByText('Canister diagnostics and health dashboard')).toBeVisible();
    await page.screenshot({ path: 'test-results/01-page-header.png', fullPage: true });
  });

  test('should show overview cards after loading', async ({ page }) => {
    test.setTimeout(TIMEOUT);
    // Wait for loading to finish — look for one of the overview card labels
    await expect(page.getByText('Cycles')).toBeVisible({ timeout: 30000 });
    await expect(page.getByText('Stable Memory')).toBeVisible();
    await expect(page.getByText('Entities')).toBeVisible();
    await expect(page.getByText('Files')).toBeVisible();
    await page.screenshot({ path: 'test-results/02-overview-cards.png', fullPage: true });
  });

  test('should show versions section', async ({ page }) => {
    test.setTimeout(TIMEOUT);
    await expect(page.getByText('Versions')).toBeVisible({ timeout: 30000 });
    await expect(page.getByText('Python')).toBeVisible();
    await expect(page.getByText('Basilisk')).toBeVisible();
    await expect(page.getByText('Realms')).toBeVisible();
    await page.screenshot({ path: 'test-results/03-versions.png', fullPage: true });
  });

  test('should show database entities section', async ({ page }) => {
    test.setTimeout(TIMEOUT);
    await expect(page.getByText('Database Entities')).toBeVisible({ timeout: 30000 });
    await page.screenshot({ path: 'test-results/04-db-entities.png', fullPage: true });
  });

  test('should show extensions section', async ({ page }) => {
    test.setTimeout(TIMEOUT);
    await expect(page.getByText('Extensions')).toBeVisible({ timeout: 30000 });
    // system_info itself should be listed
    await expect(page.getByText('system_info')).toBeVisible();
    await page.screenshot({ path: 'test-results/05-extensions.png', fullPage: true });
  });

  test('should have a working refresh button', async ({ page }) => {
    test.setTimeout(TIMEOUT);
    // Wait for initial load
    await expect(page.getByText('Cycles')).toBeVisible({ timeout: 30000 });
    const refreshButton = page.getByRole('button', { name: 'Refresh' });
    await expect(refreshButton).toBeVisible();
    await expect(refreshButton).toBeEnabled();
    await page.screenshot({ path: 'test-results/06-refresh-button.png', fullPage: true });
  });

  test('should not show error on initial load', async ({ page }) => {
    test.setTimeout(TIMEOUT);
    // Wait for data to load (Cycles card appears)
    await expect(page.getByText('Cycles')).toBeVisible({ timeout: 30000 });
    // No error should be visible
    await expect(page.getByText('Error:')).not.toBeVisible({ timeout: 3000 });
    await page.screenshot({ path: 'test-results/07-no-error.png', fullPage: true });
  });
});
