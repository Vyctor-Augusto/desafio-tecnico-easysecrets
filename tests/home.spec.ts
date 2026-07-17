import { test, expect } from '@playwright/test';

test('deve abrir a página inicial do Demoblaze', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await expect(page).toHaveTitle(/STORE/);
  await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
});