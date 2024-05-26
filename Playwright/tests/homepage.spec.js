const { test, expect } = require('@playwright/test');

test.describe('Strona główna Castorama', () => {
  test.beforeEach(async ({ page }) => {
    // Odwiedzamy stronę główną Castorama przed każdym testem
    await page.goto('https://www.castorama.pl');
    await page.click('#truste-consent-button');
  });

  test('Sprawdza, czy główny baner jest wyświetlany', async ({ page }) => {
    await expect(page.locator('[data-test-id="PageContent"]')).toBeVisible();
  });

  test('Sprawdza, czy sekcja z popularnymi kategoriami jest wyświetlana', async ({ page }) => {
    await expect(page.locator('[data-test-id="grid-sections"]')).toBeVisible();
  });

  test('Sprawdza, czy sekcja "Promocje" jest wyświetlana', async ({ page }) => {
    await expect(page.locator('[data-test-id="editorial-tile"]')).toBeVisible();
  });

  test('Sprawdza, czy stopka strony jest wyświetlana', async ({ page }) => {
    await expect(page.locator('[data-test-id="footer-section"]')).toBeVisible();
  });

  test('Sprawdza, czy pasek wyszukiwania jest wyświetlany i działa', async ({ page }) => {
    await expect(page.locator('[data-test-id="searchBar"]')).toBeVisible();
    await page.fill('[data-test-id="searchBar"]', 'drzwi');
    await page.press('[data-test-id="searchBar"]', 'Enter');
    await expect(page).toHaveURL(/.*\?term=drzwi/);
    await expect(page.locator('[id="product-lister"]')).toBeVisible();
  });

  test('Sprawdza, czy przyciski logowania i rejestracji są widoczne', async ({ page }) => {
    await expect(page.locator('[data-test-id="desktop-header-login"]')).toBeVisible();
  });
});