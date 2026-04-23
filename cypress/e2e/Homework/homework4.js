describe('Homework 4', () => {
  beforeEach(() =>{
    cy.visit('https://fabrykatestow.pl')
  })

  it('By ID', () => {
    cy.get('#newsletter')
    cy.get('#menu-item-923')
    cy.get('#header-menu-sidebar')
    cy.get('#kursy')
    cy.get('#58444c0')
  })

    it('By class', () => {
    cy.get('.elementor-button-wrapper')
    cy.get('.elementor-widget-container')
    cy.get('.elementor-button-icon')
    cy.get('.brand')
    cy.get('.wrapper')
  })

    it('By Attribute', () => {
    cy.get('button[value="Menu nawigacji"]')
    cy.get('img[loading="lazy"]')
    cy.get('div[class="wrapper"]')
    cy.get('a[href="https://fabrykatestow.pl/#kursy"]')
    cy.get('input[type="search"]')
  })

    it('By text', () => {
    cy.get('span').contains('ZAPISZ MNIE NA NEWSLETTER!')
    cy.get('span').contains('Zobacz co oferujemy')
    cy.get('span').contains('Bądź na bieżąco')
    cy.get('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ')
    cy.get('span').contains('Sprawdź nasze kursy')
  })
})
