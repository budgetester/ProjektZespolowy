const { test, expect } = require('@playwright/test');

test.describe('Strona produktu Castorama', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.castorama.pl/nawoz-przeciwko-brazowieniu-igiel-agrecol-5-kg/5902341002482_CAPL.prd');
    await page.click('#truste-consent-button');
  });

  test('Sprawdza proces dodawania do koszyka i realizacji zakupu', async ({ page }) => {
    await page.click('[data-test-id="product-qty-plus"]');
    await page.fill('[data-test-id="field-input"]', '92-542');
    await page.click('[data-test-id="check-post-code-btn"]');
    await page.waitForTimeout(500);
    await page.click('[data-test-id="add-to-basket-button"]');
    await page.click('[data-test-id="go-to-basket"]');
    await page.click('[data-test-id="basket-checkout-button"]');
    await page.click('[data-test-id="fulfilment-delivery-tile_radio"]');
    await page.click('[data-optimizely-id="optimizelyTestId-fulfilment-continue-button"]');
    await page.fill('[data-test-id="field-input"]', 'jakub.test123@wp.pl');
    await page.click('[data-optimizely-id="optimizelyTestId-checkoutAsGuestButton"]');
    await page.waitForTimeout(2000);
    await page.fill('input[name="firstName"]', 'Jakub');
    await page.fill('input[name="lastName"]', 'Nazwisko');
    await page.fill('input[name="mobileNumber"]', '536709388');
    await page.click('[data-test-id="manual-address-entry-button"]');
    await page.fill('input[name="addressLine1"]', 'ulica');
    await page.fill('input[name="houseNumber"]', '1');
    await page.fill('input[name="city"]', 'Miejscowosc');
    await page.click('[data-test-id="add-address-button"]');
  });
});