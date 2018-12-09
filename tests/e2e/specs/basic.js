// https://docs.cypress.io/api/introduction/api.html

import { initialState } from '../../../src/store/initialState'

describe('Basic view', () => {
  it('Visits the basic view', () => {
    cy.visit('/')
    cy
      .contains('a', 'basic')
      .should('be.visible')

    cy
      .contains('a', 'pro')
      .should('not.be.visible')
  })

  it('change time to tomorrow', () => {
    cy
      .get('#when-select')
      .should('contain', 'now')
      .click()
      .should('contain', 'tomorrow')

    cy.contains('~')
  })

  it('perform search', () => {
    cy
      .get('#location-select')
      .should('contain', initialState.location.text)
      .click()

    cy
      .get('#location-select input')
      .type('san francisco{enter}')
  })

  it('locate user', () => {
    cy
      .get('#locate-me')
      .click()
  })
})
