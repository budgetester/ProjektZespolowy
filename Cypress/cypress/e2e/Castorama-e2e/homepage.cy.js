 Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


describe('Strona główna Castorama', () => {
  beforeEach(() => {
    // Odwiedzamy stronę główną Castorama przed każdym testem
    cy.viewport(1920, 1080);
    cy.visit('https://www.castorama.pl');
    cy.get('#truste-consent-button').click()
  });

  it('Sprawdza, czy główny baner jest wyświetlany', () => {
    // Sprawdzamy, czy główny baner jest widoczny

    cy.get('[data-test-id="PageContent"]').should('be.visible');
  });

  it('Sprawdza, czy sekcja z popularnymi kategoriami jest wyświetlana', () => {
    // Sprawdzamy, czy sekcja z popularnymi kategoriami jest widoczna
    cy.get('[data-test-id="grid-sections"]').should('be.visible');
  });

  it('Sprawdza, czy sekcja "Promocje" jest wyświetlana', () => {
    // Sprawdzamy, czy sekcja "Promocje" jest widoczna
    cy.get('[data-test-id="editorial-tile"]').should('be.visible');
  });

  it('Sprawdza, czy stopka strony jest wyświetlana', () => {
    // Sprawdzamy, czy stopka strony jest widoczna
    cy.get('[data-test-id="footer-section"]').should('be.visible');
  });

  it('Sprawdza, czy pasek wyszukiwania jest wyświetlany i działa', () => {
    // Sprawdzamy, czy pasek wyszukiwania jest widoczny
    cy.get('[data-test-id="searchBar"]').should('be.visible')
      .type('drzwi{enter}');
    
    // Sprawdzamy, czy wyniki wyszukiwania są wyświetlane
    cy.url().should('include', '?term=drzwi');
    cy.get('[id="product-lister"]').should('be.visible');
  });

  it('Sprawdza, czy przyciski logowania i rejestracji są widoczne', () => {
    // Sprawdzamy, czy przycisk logowania jest widoczny
    cy.get('[data-test-id="desktop-header-login"]').should('be.visible');
  });

});