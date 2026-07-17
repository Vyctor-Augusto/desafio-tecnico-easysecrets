import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async expectProductInCart(productName: string) {
    const productCell = this.page.locator('td', { hasText: productName });
    await expect(productCell).toBeVisible({ timeout: 15000 });
  }

  async removeProduct(productName: string) {
    const productRow = this.page.locator('tr', { hasText: productName });

    await expect(productRow).toBeVisible({ timeout: 15000 });
    await productRow.getByRole('link', { name: 'Delete' }).click();
  }

  async expectProductRemoved(productName: string) {
    const productCell = this.page.locator('td', { hasText: productName });
    await expect(productCell).not.toBeVisible({ timeout: 15000 });
  }
}