import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for system_info E2E tests
 */
export default defineConfig({
  testDir: './specs',

  timeout: 45 * 1000,

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  maxFailures: 1,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:8000',
    trace: 'on-first-retry',
    screenshot: 'on',
    video: 'retain-on-failure',
    navigationTimeout: 120000,
    actionTimeout: 15000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
