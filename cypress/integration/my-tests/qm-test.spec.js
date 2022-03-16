// test-qm.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress" />
const path = require('path')

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('QM Kontakt Test Suite', () => {
  beforeEach(() => {
    const downloadsFolder = Cypress.config('downloadsFolder')
    cy.task('deleteFolder', downloadsFolder)
  })
  
  const downloadsFolder = Cypress.config('downloadsFolder')
  it('Tests the kontakt page', () => {
    cy.visit('www.qualityminds.de/')
    cy.get('a')
      .contains('Kontakt')
      .click()
    cy.get('a.mailto-link')
      .contains('hello@qualityminds.de')
      .should('exist')
    cy.url().then(($url) => {
      cy.go('back')
      cy.contains('Kontakt & Anfahrt')
        .click()
      cy.url()
        .should('equal', $url)
    })
  })
  it.only('Tests submenus', () => {
    cy.visit('www.qualityminds.de/')
    cy.get('a')
      .contains('Portfolio')
      .trigger('mouseover')
      .parent()
      .find('ul.sub-menu')
      .should('be.visible')
    cy.get('a')
      .contains('Web, Automation & Mobile Testing')
      .click()
    cy.get('a')
      .contains('Portfolio')
      .should('have.css', 'color')
      .and('eq', 'rgb(130, 186, 69)')
    cy.get('div.tab-title-row')
      .contains('Mobile')
      .click()
    cy.get('div[id="team-tab-three-body"]')
      .should('be.visible')
    cy.get('div.tab-title-row').within(() => {
      cy.get('div.active-team-tab')
        .not('.inactive-team-tab')
        .should('have.css', 'border-bottom-color')
        .and('eq', 'rgb(151, 151, 151)')
    })
    cy.get('div.tab-download-button')
      .contains('Flyer Find the Bug Session')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('eq', 'https://qualityminds.de/app/uploads/2018/11/Find-The-Mobile-Bug-Session.pdf')
    
    cy.get('div.tab-download-button')
      .contains('Flyer Find the Bug Session')
      .click()

    const filename = path.join(downloadsFolder, 'FLYER FIND THE BUG SESSION.pdf')
    cy.readFile(filename, {timeout: 15000})
      .should('exist')
    
    // .within(() => {
    //   cy.get('li.current-menu-item').within(() => {
    //     cy.get('a')
    //       .should('contain.text', 'Portfolio')
    //   })
    // })


      // .children()
      // .find('li.current-menu-item')
      // .should('contain.text', 'Portfolio')
  })
})
