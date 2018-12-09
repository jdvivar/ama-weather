// https://docs.cypress.io/api/introduction/api.html

describe('Pro view', () => {
  it('Visits the pro view', () => {
    cy.visit('/pro')
    cy
      .contains('a', 'basic')
      .should('not.be.visible')

    cy
      .contains('a', 'pro')
      .should('be.visible')
  })
  it('Should locate different cities', () => {
    cy
      .get('#location-select')
      .click()

      cy
        .contains('lat: 40.421429')

    cy
      .get('#location-select input')
      .type('san francisco{enter}')

    cy
      .contains('lat: 37.747398')

    cy
      .get('#location-select')
      .click()

    cy
      .get('#location-select input')
      .type('paris{enter}')

    cy
      .contains('lat: 48.85693')
  })
})
