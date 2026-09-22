const { test, expect } = require('@playwright/test');

/**
 * shopping-flow.spec.js
 * Test end-to-end complet, comme demandé dans le devoir ("un flux
 * end-to-end complet"). Il enchaîne plusieurs tests manuels de la
 * Part 1 : navigation produit -> ajout au panier -> tentative de
 * checkout, ce qui touche BUG-007/008 (tri et catégories) et
 * BUG-009/010 (erreur 304 / méthode de paiement invalide acceptée
 * au checkout).
 */

test('Parcours complet : recherche produit, ajout au panier, tentative de checkout', async ({ page }) => {

  // 1. Arriver sur la page d'accueil
  await page.goto('https://practicesoftwaretesting.com/');

  // 2. Trier les produits du moins cher au plus cher
  // Relié à BUG-007 (tri Low-to-High inversé) : si le bug est présent,
  // l'assertion ci-dessous échouera, ce qui documente automatiquement
  // le problème à chaque exécution.
  await page.locator('[data-test="sort"]').selectOption('price,asc');
  const prices = await page.locator('[data-test="product-price"]').allTextContents();
  const numericPrices = prices.map((p) => parseFloat(p.replace(/[^0-9.]/g, '')));
  const sortedPrices = [...numericPrices].sort((a, b) => a - b);
  expect(numericPrices).toEqual(sortedPrices);

  // 3. Se connecter avant de payer (nécessaire pour le checkout sur ce site)
  await page.getByRole('link', { name: /sign in/i }).click();
  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-submit"]').click();
  await page.waitForLoadState('networkidle');

  // 4. Ajouter un produit au panier
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="product-name"]').first().click();
  await page.locator('[data-test="add-to-cart"]').click();

  // 5. Aller au panier puis lancer le checkout
  await page.locator('[data-test="nav-cart"]').click();
  await page.locator('[data-test="proceed-1"]').click();

  // 6. Tenter de payer sans méthode de paiement valide
  // Relié à BUG-009/BUG-010 : le devoir a relevé une erreur "304 /
  // payment method missing" et l'acceptation d'une méthode de
  // paiement invalide. On vérifie ici que le checkout refuse bien de
  // continuer sans méthode de paiement correcte.
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="payment-error"]')).toBeVisible();
});