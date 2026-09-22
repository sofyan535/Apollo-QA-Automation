const { test, expect } = require('@playwright/test');


test.describe('Panier', () => {

  test('Ajouter un produit au panier met à jour le compteur du panier', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

   
    await page.locator('[data-test="product-name"]').first().click();

   
    await page.locator('[data-test="add-to-cart"]').click();


    await expect(page.locator('[data-test="cart-quantity"]')).toHaveText('1');
  });

  test('Les boutons +/- et la suppression fonctionnent dans le panier', async ({ page }) => {
   
    await page.goto('https://practicesoftwaretesting.com/');
    await page.locator('[data-test="product-name"]').first().click();
    await page.locator('[data-test="add-to-cart"]').click();


    
    await page.locator('[data-test="nav-cart"]').click();
    await expect(page).toHaveURL(/checkout/);


    await page.locator('[data-test="increase-quantity"]').click();

    await expect(page.locator('[data-test="quantity"]')).toHaveValue('2');

    await page.locator('[data-test="remove-line"]').click();
    await expect(page.locator('[data-test="product-line"]')).toHaveCount(0);
  });

});