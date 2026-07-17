import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) { }

  async open() {
    await this.page.goto('/');
  }

  async openSignUpModal() {
    await this.page.getByRole('link', { name: 'Sign up' }).click();
    await expect(this.page.locator('#signInModal')).toBeVisible();
  }

  async openLoginModal() {
    await this.page.getByRole('link', { name: 'Log in' }).click();
    await expect(this.page.locator('#logInModal')).toBeVisible();
  }

  async selectProduct(productName: string) {
    await this.page.getByRole('link', { name: productName }).click();
  }

  async openCart() {
    await this.page.locator('#cartur').click();
    await this.page.waitForURL(/cart\.html/);
  }
}