describe('Toggle Dark Mode', () => {
    context('1440px resolution', () => {
        beforeEach(() => {
            cy.viewport(1440, 1080)

            cy.visit('/evolutions')
            cy.location('pathname').should('eq', '/evolutions')
            cy.title().should('eq', 'Pokémon Evolutions | Pokémon Awesome')
            cy.contains('Pokémon Evolutions').should('be.visible')
        })

        it('can filter pokémon generations', () => {
            // filter "Generation VIII"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.location('search').should('eq', '?gen=8')
            cy.contains('Grookey').should('be.visible')
        })

        it('can filter pokémon types', () => {
            // filter "Bug"
            cy.contains('select', 'All types').select('Bug').should('have.value', 'bug')
            cy.location('search').should('eq', '?type=bug')
            cy.contains('Caterpie').should('be.visible')
        })

        it('can filter pokémon generations and types at once', () => {
            // filter "Generation VIII" and "Bug"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.contains('select', 'All types').select('Bug').should('have.value', 'bug')
            cy.location('search').should('eq', '?gen=8&type=bug')
            cy.contains('Blipbug').should('be.visible')
        })
    })

    context('768px resolution', () => {
        beforeEach(() => {
            cy.viewport(768, 480)

            cy.visit('/evolutions')
            cy.location('pathname').should('eq', '/evolutions')
            cy.title().should('eq', 'Pokémon Evolutions | Pokémon Awesome')
            cy.contains('Pokémon Evolutions').should('be.visible')
        })

        it('can filter pokémon generations', () => {
            // filter "Generation VIII"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.location('search').should('eq', '?gen=8')
            cy.contains('Grookey').should('be.visible')
        })

        it('can filter pokémon types', () => {
            // filter "Bug"
            cy.contains('select', 'All types').select('Bug').should('have.value', 'bug')
            cy.location('search').should('eq', '?type=bug')
            cy.contains('Caterpie').should('be.visible')
        })

        it('can filter pokémon generations and types at once', () => {
            // filter "Generation VIII" and "Bug"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.contains('select', 'All types').select('Bug').should('have.value', 'bug')
            cy.location('search').should('eq', '?gen=8&type=bug')
            cy.contains('Blipbug').should('be.visible')
        })
    })

    context('iPhone XR resolution', () => {
        beforeEach(() => {
            cy.viewport('iphone-xr')

            cy.visit('/evolutions')
            cy.location('pathname').should('eq', '/evolutions')
            cy.title().should('eq', 'Pokémon Evolutions | Pokémon Awesome')
            cy.contains('Pokémon Evolutions').should('be.visible')
        })

        it('can filter pokémon generations', () => {
            // filter "Generation VIII"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.location('search').should('eq', '?gen=8')
            cy.contains('Grookey').should('be.visible')
        })

        it('can filter pokémon types', () => {
            // filter "Bug"
            cy.contains('select', 'All types').select('Bug').should('have.value', 'bug')
            cy.location('search').should('eq', '?type=bug')
            cy.contains('Caterpie').should('be.visible')
        })

        it('can filter pokémon generations and types at once', () => {
            // filter "Generation VIII" and "Bug"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.contains('select', 'All types').select('Bug').should('have.value', 'bug')
            cy.location('search').should('eq', '?gen=8&type=bug')
            cy.contains('Blipbug').should('be.visible')
        })
    })
})
