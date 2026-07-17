import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async addToCart() {
    const dialogPromise = this.page.waitForEvent('dialog');

    await this.page.getByRole('link', { name: 'Add to cart' }).click();

    const dialog = await dialogPromise;
    expect(dialog.message()).toContain('Product added');
    await dialog.accept();

    await this.page.waitForTimeout(1000);
  }
}