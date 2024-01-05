/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Counter App', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Check the page', () => {
    cy.checkContentOnThePage()
  })

  it('Check incrementing', () => {
    cy.clickIncrementingButton()
    cy.get('h2').should('contain.text', '11')
  })

  it('Check decrementing', () => {
    cy.clickDecrementingButton()
    cy.get('h2').should('contain.text', '9')
  })

  it('Check Reset button', () => {
    cy.clickIncrementingButton()
    cy.clickResetButton()
    cy.get('h2').should('contain.text', '10')
  })
})