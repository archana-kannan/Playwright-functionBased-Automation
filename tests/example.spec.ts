import { test, expect } from '@playwright/test';
import { getStarted, launch } from '../functions/launch';

test('has title', async ({ page }) => {
  await launch(page, 'https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await launch(page, 'https://playwright.dev/');

  // Click the get started link.
 
  await getStarted(page);

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
