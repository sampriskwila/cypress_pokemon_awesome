/// <reference types="cypress" />

describe('Toggle Dark Mode', () => {
    context('1440px resolution', () => {
        beforeEach(() => {
            cy.viewport(1440, 1080)

            cy.visit('/')
            cy.location('pathname').should('eq', '/')
            cy.title().should('eq', 'Pokémon Awesome')
        })

        it('can toggle dark/white mode', () => {
            // toggle to dark mode
            cy.get('label[for="darkmode-toggle"]').click()
            cy.get('html').should('have.class', 'dark')

            // toggle to white mode
            cy.get('label[for="darkmode-toggle"]').click()
            cy.get('html').should('not.have.class', 'dark')
        })
    })

    context('768px resolution', () => {
        beforeEach(() => {
            cy.viewport(768, 480)

            cy.visit('/')
            cy.location('pathname').should('eq', '/')
            cy.title().should('eq', 'Pokémon Awesome')
        })

        it('can toggle to dark/white mode', () => {
            // toggle to dark mode
            cy.get('label[for="darkmode-toggle"]').click()
            cy.get('html').should('have.class', 'dark')

            // toggle to white mode
            cy.get('label[for="darkmode-toggle"]').click()
            cy.get('html').should('not.have.class', 'dark')
        })
    })

    context('iPhone XR resolution', () => {
        beforeEach(() => {
            cy.viewport('iphone-x')

            cy.visit('/')
            cy.location('pathname').should('eq', '/')
            cy.title().should('eq', 'Pokémon Awesome')
        })

        it('can toggle to dark/white mode', () => {
            // toggle to dark mode
            cy.get('label[for="darkmode-toggle"]').click()
            cy.get('html').should('have.class', 'dark')

            // toggle to white mode
            cy.get('label[for="darkmode-toggle"]').click()
            cy.get('html').should('not.have.class', 'dark')
        })
    })
})
