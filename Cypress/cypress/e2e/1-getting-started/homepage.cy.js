describe('Strona główna Castorama', () => {
  beforeEach(() => {
    // Odwiedzamy stronę główną Castorama przed każdym testem
    cy.visit('https://www.castorama.pl');
  });

  it('Sprawdza, czy główny baner jest wyświetlany', () => {
    // Sprawdzamy, czy główny baner jest widoczny
    cy.get('.hero-slider').should('be.visible');
  });

  it('Sprawdza, czy sekcja z popularnymi kategoriami jest wyświetlana', () => {
    // Sprawdzamy, czy sekcja z popularnymi kategoriami jest widoczna
    cy.get('.category-promo').should('be.visible');
  });

  it('Sprawdza, czy sekcja "Promocje" jest wyświetlana', () => {
    // Sprawdzamy, czy sekcja "Promocje" jest widoczna
    cy.get('.promo-boxes').should('be.visible');
  });

  it('Sprawdza, czy stopka strony jest wyświetlana', () => {
    // Sprawdzamy, czy stopka strony jest widoczna
    cy.get('footer').should('be.visible');
  });

  it('Sprawdza, czy pasek wyszukiwania jest wyświetlany i działa', () => {
    // Sprawdzamy, czy pasek wyszukiwania jest widoczny
    cy.get('#search-input').should('be.visible')
      .type('drzwi{enter}');
    
    // Sprawdzamy, czy wyniki wyszukiwania są wyświetlane
    cy.url().should('include', 'search?text=drzwi');
    cy.get('.products-list').should('be.visible');
  });

  it('Sprawdza, czy przyciski logowania i rejestracji są widoczne', () => {
    // Sprawdzamy, czy przycisk logowania jest widoczny
    cy.get('.user-menu-login').should('be.visible');

    // Sprawdzamy, czy przycisk rejestracji jest widoczny
    cy.get('.user-menu-register').should('be.visible');
  });

  it('Sprawdza, czy sekcja z nowościami jest wyświetlana', () => {
    // Sprawdzamy, czy sekcja z nowościami jest widoczna
    cy.get('.new-products').should('be.visible');
  });
});