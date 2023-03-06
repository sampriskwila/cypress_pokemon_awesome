describe('Navigation Bar', () => {
    const titles = [
        'Pokémon Awesome',
        'Compare Pokémons | Pokémon Awesome',
        'Statistics of Pokémon Types | Pokémon Awesome',
        'My Pokémons | Pokémon Awesome',
        'Pokémon Evolutions | Pokémon Awesome',
        "Who's That Pokémon? | Pokémon Awesome",
        'About | Pokémon Awesome',
    ]

    const pathnames = [
        '/',
        '/compare',
        '/statistics/types',
        '/my-pokemons',
        '/evolutions',
        '/guess-pokemon',
        '/about',
    ]

    context('1440px resolution', () => {
        beforeEach(() => {
            cy.viewport(1440, 1080)

            cy.visit('/')
            cy.location('pathname').should('eq', '/')
            cy.title().should('eq', 'Pokémon Awesome')
        })

        it('can switch page based on navigation bar', () => {
            // switch each pages from nav-bar
            cy.get('#_nav-inner')
                .find('li:visible')
                .each(($el, index) => {
                    cy.wrap($el).find('a').click()
                    cy.title().should('eq', titles[index])
                    cy.location('pathname').should('eq', pathnames[index])
                })
        })
    })

    context('768px resolution', () => {
        beforeEach(() => {
            cy.viewport(768, 480)

            cy.visit('/')
            cy.location('pathname').should('eq', '/')
            cy.title().should('eq', 'Pokémon Awesome')
        })

        it('can switch page based on navigation bar', () => {
            // switch each pages from nav-bar
            cy.get('#_nav-inner')
                .find('li:visible')
                .each(($el, index) => {
                    cy.wrap($el).find('a').click()
                    cy.title().should('eq', titles[index])
                    cy.location('pathname').should('eq', pathnames[index])
                })
        })
    })

    context('iPhone XR resolution', () => {
        beforeEach(() => {
            cy.viewport('iphone-xr')

            cy.visit('/')
            cy.location('pathname').should('eq', '/')
            cy.title().should('eq', 'Pokémon Awesome')
        })

        it('can switch page based on navigation bar', () => {
            // switch each pages from nav-bar
            cy.get('#_nav-inner')
                .find('li.flex-1')
                .each(($el, index) => {
                    if (index >= 3) {
                        if (index === 7) return

                        cy.contains('button', 'All Menu').click()
                        cy.wrap($el).next().find('a').click()
                    } else {
                        cy.wrap($el).find('a').click()
                    }

                    cy.title().should('eq', titles[index])
                    cy.location('pathname').should('eq', pathnames[index])
                })
        })
    })
})
