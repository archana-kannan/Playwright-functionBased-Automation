import type {Page} from "@playwright/test";

export async function launch(page: Page, url: string) {
  await page.goto(url);
  await page.waitForLoadState("networkidle");
}

export async function getStarted(page: Page, timeout: number = 5000) {
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.waitForLoadState("networkidle", { timeout });
}