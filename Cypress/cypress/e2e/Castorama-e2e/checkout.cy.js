 Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


describe('Strona główna Castorama', () => {
  beforeEach(() => {
    // Odwiedzamy stronę kategorrii Castorama 
    cy.viewport(1920, 1080);
    cy.visit('https://www.castorama.pl/nawoz-przeciwko-brazowieniu-igiel-agrecol-5-kg/5902341002482_CAPL.prd');
    cy.get('#truste-consent-button').click()
  });

  it('Sprawdza, czy sekcja z popularnymi kategoriami jest wyświetlana', () => {
    // Zwiększamy ilość produktu
    cy.get('[data-test-id="product-qty-plus"]').should('be.visible').click();

   // Button dodania do koszyka

    cy.get('[data-test-id="field-input"]').should('be.visible').type('92-542');
    
    cy.get('[data-test-id="check-post-code-btn"]').should('be.visible').click();

    cy.wait(500);

    cy.get('[data-test-id="add-to-basket-button"]').should('be.visible').click();

    cy.get('[data-test-id="go-to-basket"]').should('be.visible').click();

    cy.get('[data-test-id="basket-checkout-button"]').should('be.visible').click();

    cy.get('[data-test-id="fulfilment-delivery-tile_radio"]').should('be.visible').click();

    cy.get('[data-optimizely-id="optimizelyTestId-fulfilment-continue-button"]').should('be.visible').click();

    cy.get('[data-test-id="field-input"]').should('be.visible').type('jakub.test123@wp.pl');

    cy.get('[data-optimizely-id="optimizelyTestId-checkoutAsGuestButton"]').should('be.visible').click();

    cy.wait(2000);
    
    cy.get('input[name="firstName"]').should('be.visible').type('Jakub');

    cy.get('input[name="lastName"]').should('be.visible').type('Nazwisko');

    cy.get('input[name="mobileNumber"]').should('be.visible').type('536709388');

    cy.get('[data-test-id="manual-address-entry-button"]').should('be.visible').click();

    cy.get('input[name="addressLine1"]').should('be.visible').type('ulica');

    cy.get('input[name="houseNumber"]').should('be.visible').type('1');
    
    cy.get('input[name="city"]').should('be.visible').type('Miejscowosc');

    cy.get('[data-test-id="add-address-button"]').should('be.visible').click()
  });


});