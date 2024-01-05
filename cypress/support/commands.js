/* eslint-disable no-undef */
/// <reference types="cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('checkContentOnThePage', () => {
    cy.get('h1').should('contain.text', 'CounterApp')
    cy.get('h2').should('contain.text', '10')
    cy.get('button').eq(0).should('contain.text', '+1').and('be.visible')
    cy.get('button').eq(1).should('contain.text', 'Reset').and('be.visible')
    cy.get('button').eq(2).should('contain.text', '-1').and('be.visible')
})

Cypress.Commands.add('clickIncrementingButton', () => {
    cy.get('button').eq(0).click()
})

Cypress.Commands.add('clickDecrementingButton', () => {
    cy.get('button').eq(2).click()
})

Cypress.Commands.add('clickResetButton', () => {
    cy.get('button').eq(1).click()
})