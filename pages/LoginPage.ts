import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.locator('#loginusername').fill(username);
    await this.page.locator('#loginpassword').fill(password);
    await this.page.getByRole('button', { name: 'Log in' }).click();

    await expect(this.page.locator('#nameofuser')).toContainText(username);
  }
}