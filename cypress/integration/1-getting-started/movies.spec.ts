/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Movie search app', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('ODMB Search App')
    cy.contains('Find a film: ')
  })

  it('trying to search for an empty string shows an error message', function() {
    cy.get('button')
      .click()
    cy.get('#error-message')
      .should('contain', 'Please write a title.')
  })

  it('searching for a movie renders the results', function() {
    cy.get('#search-bar')
      .type('The Shawshank Redemption')
    cy.get('button')
      .click()
    cy.contains('The Shawshank Redemption')
    cy.contains('1994')
    cy.get('#error-message')
      .should('contain', '')

  })

  it('searching for a movie that does not exist shows an error message', function() {
    cy.get('#search-bar')
      .type('this movie does not exist')
    cy.get('button')
      .click()
    cy.get('#error-message')
      .should('contain', 'No movies match your search.')
  })
  
})
