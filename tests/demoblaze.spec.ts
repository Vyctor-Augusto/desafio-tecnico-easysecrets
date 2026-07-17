import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignupPage } from '../pages/SignupPage';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { createTestUser, product } from '../utils/testData';

test('deve cadastrar, logar, adicionar e remover produto do carrinho', async ({ page, browserName }) => {
  const testUser = createTestUser(browserName);

  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await test.step('Acessar a página inicial', async () => {
    await homePage.open();
  });

  await test.step('Cadastrar um novo usuário', async () => {
    await homePage.openSignUpModal();
    await signupPage.signup(testUser.username, testUser.password);
  });

  await test.step('Realizar login com o usuário cadastrado', async () => {
    await homePage.openLoginModal();
    await loginPage.login(testUser.username, testUser.password);
  });

  await test.step('Selecionar produto e adicionar ao carrinho', async () => {
    await homePage.selectProduct(product.name);
    await productPage.addToCart();
  });

  await test.step('Validar produto no carrinho', async () => {
    await homePage.openCart();
    await cartPage.expectProductInCart(product.name);
  });

  await test.step('Remover produto do carrinho', async () => {
    await cartPage.removeProduct(product.name);
    await cartPage.expectProductRemoved(product.name);
  });
});