const { test, expect } = require('@playwright/test');

test.describe('Strona kategorii Castorama', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.castorama.pl/ogrod-i-otoczenie/meble-ogrodowe/zestawy-meblowe.cat');
    await page.click('#truste-consent-button');
  });

  test('Sprawdza, czy lista produktów jest wyświetlana', async ({ page }) => {
    await expect(page.locator('[id="product-lister"]')).toBeVisible();
  });

  test('Sprawdza, czy cena produktu jest wyświetlana', async ({ page }) => {
    await expect(page.locator('[data-test-id="productPrice"]')).toBeVisible();
  });

  test('Sprawdza, czy button dodaj do koszyka jest widoczny', async ({ page }) => {
    await expect(page.locator('[data-test-id="add-to-basket-button-plp"]')).toBeVisible();
  });

  test('Sprawdza, czy stopka strony jest wyświetlana', async ({ page }) => {
    await expect(page.locator('[data-test-id="footer-section"]')).toBeVisible();
  });

  test('Sprawdza, czy sekcja polecanych produktów jest wyświetlana', async ({ page }) => {
    await expect(page.locator('[data-test-id="grid-sections"]')).toBeVisible();
  });
});