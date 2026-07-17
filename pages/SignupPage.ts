import { Page, expect } from '@playwright/test';

export class SignupPage {
  constructor(private page: Page) {}

  async signup(username: string, password: string) {
    const usernameInput = this.page.locator('#sign-username');
    const passwordInput = this.page.locator('#sign-password');

    await expect(usernameInput).toBeVisible({ timeout: 10000 });
    await expect(passwordInput).toBeVisible({ timeout: 10000 });

    await usernameInput.fill(username);
    await passwordInput.fill(password);

    await expect(usernameInput).toHaveValue(username);
    await expect(passwordInput).toHaveValue(password);

    const dialogPromise = this.page.waitForEvent('dialog');

    await this.page.getByRole('button', { name: 'Sign up' }).click();

    const dialog = await dialogPromise;
    expect(dialog.message()).toContain('Sign up successful');
    await dialog.accept();
  }
}