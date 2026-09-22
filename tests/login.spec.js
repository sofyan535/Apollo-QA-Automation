const { test, expect } = require('@playwright/test');



test.describe('Login', () => {

  test('Un utilisateur peut se connecter avec des identifiants valides', async ({ page }) => {
   
    await page.goto('https://practicesoftwaretesting.com/');

    await page.getByRole('link', { name: /sign in/i }).click();


    await expect(page.getByRole('heading', { name: /login/i })).toBeVisible();

    
    await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');


    await page.locator('[data-test="password"]').fill('welcome01');


    await page.locator('[data-test="login-submit"]').click();

   
    await page.waitForLoadState('networkidle');

    await expect(page).not.toHaveURL(/auth\/login/);
    await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();
  });

  test('Un email déjà utilisé est rejeté à la connexion avec un mauvais mot de passe', async ({ page }) => {
   
    await page.goto('https://practicesoftwaretesting.com/auth/login');

    await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
    await page.locator('[data-test="password"]').fill('mauvais-mot-de-passe-123');
    await page.locator('[data-test="login-submit"]').click();

    await expect(page.locator('[data-test="login-error"]')).toBeVisible();
    await expect(page).toHaveURL(/auth\/login/);
  });

});