 Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


describe('Strona główna Castorama', () => {
  beforeEach(() => {
    // Odwiedzamy stronę kategorrii Castorama 
    cy.viewport(1920, 1080);
    cy.visit('https://www.castorama.pl/ogrod-i-otoczenie/meble-ogrodowe/zestawy-meblowe.cat');
    cy.get('#truste-consent-button').click()
  });

  it('Sprawdza, czy główny baner jest wyświetlany', () => {
    // Sprawdzamy, czy lista produktów jest widoczna

    cy.get('[id="product-lister"]').should('be.visible');
  });

  it('Sprawdza, czy sekcja z popularnymi kategoriami jest wyświetlana', () => {
    // Sprawdzamy, czy cena produktu jest widoczna  
    cy.get('[data-test-id="productPrice"]').should('be.visible');
  });

  it('Sprawdza, czy sekcja "Promocje" jest wyświetlana', () => {
    // Sprawdzamy, czy button dodaj do koszyka
    cy.get('[data-test-id="add-to-basket-button-plp"]').should('be.visible');
  });

  it('Sprawdza, czy stopka strony jest wyświetlana', () => {
    // Sprawdzamy, czy stopka strony jest widoczna
    cy.get('[data-test-id="footer-section"]').should('be.visible');
  });

  it('Sprawdza, czy pasek wyszukiwania jest wyświetlany i działa', () => {
    // Sprawdzamy, czy sekca polecanych produktów
    cy.get('[data-test-id="grid-sections"]').should('be.visible')
  });


});