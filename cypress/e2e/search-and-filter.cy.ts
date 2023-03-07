describe('Search & Filter Pokémon', () => {
    context('1440px resolution - success cases', () => {
        beforeEach(() => {
            cy.viewport(1440, 1080)

            cy.visit('/')
            cy.location('pathname').should('eq', '/')
            cy.title().should('eq', 'Pokémon Awesome')
        })

        it('can filter pokémon generations, then search pokémon', () => {
            // filter "Generation VIII"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.location('search').should('eq', '?gen=8')
            cy.contains('Grookey').should('be.visible')

            // search "bunny"
            cy.get('input[type="text"]').type('bunny').should('have.value', 'bunny')
            cy.location('search').should('eq', '?q=bunny&gen=8')
            cy.contains('Scorbunny').should('be.visible')
        })

        it('can filter pokémon types, then search pokémon', () => {
            // filter "Bug"
            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.location('search').should('eq', '?type=7')
            cy.contains('Caterpie').should('be.visible')
            cy.contains('NOTE:').should('be.visible')

            // search "cater"
            cy.get('input[type="text"]').type('cater').should('have.value', 'cater')
            cy.location('search').should('eq', '?q=cater&type=7')
            cy.contains('Caterpie').should('be.visible')
        })

        it('can search pokémon, then filter pokémon', () => {
            // search "dot"
            cy.get('input[type="text"]').type('dot').should('have.value', 'dot')
            cy.contains('Dottler').should('be.visible')

            // filter "Generation VIII" and "Bug"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.contains('Dottler').should('be.visible')

            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.location('search').should('eq', '?q=dot&gen=8&type=7')
            cy.contains('Dottler').should('be.visible')
            cy.contains('NOTE:').should('be.visible')
        })

        it('can search and filter pokémon at once', () => {
            // filter "Generation VIII" and "Bug"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.contains('Grookey').should('be.visible')

            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.contains('Blipbug').should('be.visible')
            cy.contains('NOTE:').should('be.visible')

            // search "dot"
            cy.get('input[type="text"]').type('dot').should('have.value', 'dot')
            cy.location('search').should('eq', '?q=dot&gen=8&type=7')
            cy.contains('Dottler').should('be.visible')
        })
    })

    context('1440px resolution - failed cases', () => {
        beforeEach(() => {
            cy.viewport(1440, 1080)

            cy.visit('/')
            cy.title().should('contain', 'Pokémon Awesome')
        })

        it('can filter pokémon generations, but fail to search pokémon', () => {
            // filter "Generation VIII"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.location('search').should('eq', '?gen=8')
            cy.contains('Grookey').should('be.visible')

            // search "cater"
            cy.get('input[type="text"]').type('cater').should('have.value', 'cater')
            cy.location('search').should('eq', '?q=cater&gen=8')
            cy.contains('No result').should('be.visible')
        })

        it('can filter pokémon types, but fail to search pokémon', () => {
            // filter "Bug"
            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.location('search').should('eq', '?type=7')
            cy.contains('Caterpie').should('be.visible')
            cy.contains('NOTE:').should('be.visible')

            // search "bunny"
            cy.get('input[type="text"]').type('bunny').should('have.value', 'bunny')
            cy.location('search').should('eq', '?q=bunny&type=7')
            cy.contains('No result').should('be.visible')
        })

        it('can search pokémon, but fail to filter pokémon', () => {
            // search "pika"
            cy.get('input[type="text"]').type('pika').should('have.value', 'pika')
            cy.contains('Pikachu').should('be.visible')

            // filter "Generation VIII" and "Bug"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.location('search').should('eq', '?q=pika&gen=8&type=7')
            cy.contains('No result').should('be.visible')
            cy.contains('NOTE:').should('be.visible')
        })

        it('can filter pokémon, but fail to search pokémon', () => {
            // filter "Generation VIII" and "Bug"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.contains('Grookey').should('be.visible')

            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.contains('Blipbug').should('be.visible')
            cy.contains('NOTE:').should('be.visible')

            // search "pika"
            cy.get('input[type="text"]').type('pika').should('have.value', 'pika')
            cy.location('search').should('eq', '?q=pika&gen=8&type=7')
            cy.contains('No result').should('be.visible')
        })
    })

    context('768px resolution - success cases', () => {
        beforeEach(() => {
            cy.viewport(768, 480)

            cy.visit('/')
            cy.location('pathname').should('eq', '/')
            cy.title().should('eq', 'Pokémon Awesome')
        })

        it('can filter pokémon generations, then search pokémon', () => {
            // toggle filter button
            cy.get('button[title="Filter"]').eq(0).click()

            // filter "Generation VIII"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.location('search').should('eq', '?gen=8')
            cy.contains('Grookey').should('be.visible')
            cy.get('.bg-emerald-500').should('be.visible')

            // search "bunny"
            cy.get('input[type="text"]').type('bunny').should('have.value', 'bunny')
            cy.location('search').should('eq', '?q=bunny&gen=8')
            cy.contains('Scorbunny').should('be.visible')
        })

        it('can filter pokémon types, then search pokémon', () => {
            // toggle filter button
            cy.get('button[title="Filter"]').eq(0).click()

            // filter "Bug"
            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.location('search').should('eq', '?type=7')
            cy.contains('Caterpie').should('be.visible')
            cy.contains('NOTE:').should('be.visible')
            cy.get('.bg-emerald-500').should('be.visible')

            // search "cater"
            cy.get('input[type="text"]').type('cater').should('have.value', 'cater')
            cy.location('search').should('eq', '?q=cater&type=7')
            cy.contains('Caterpie').should('be.visible')
        })

        it('can search pokémon, then filter pokémon', () => {
            // search "dot"
            cy.get('input[type="text"]').type('dot').should('have.value', 'dot')
            cy.contains('Dottler').should('be.visible')

            // toggle filter button
            cy.get('button[title="Filter"]').eq(0).click()

            // filter "Generation VIII" and "Bug"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.contains('Dottler').should('be.visible')

            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.location('search').should('eq', '?q=dot&gen=8&type=7')
            cy.contains('Dottler').should('be.visible')
            cy.contains('NOTE:').should('be.visible')
            cy.get('.bg-emerald-500').should('be.visible')
        })

        it('can search and filter pokémon at once', () => {
            // toggle filter button
            cy.get('button[title="Filter"]').eq(0).click()

            // filter "Generation VIII" and "Bug"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.contains('Grookey').should('be.visible')

            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.contains('Blipbug').should('be.visible')
            cy.contains('NOTE:').should('be.visible')
            cy.get('.bg-emerald-500').should('be.visible')

            // search "dot"
            cy.get('input[type="text"]').type('dot').should('have.value', 'dot')
            cy.location('search').should('eq', '?q=dot&gen=8&type=7')
            cy.contains('Dottler').should('be.visible')
        })
    })

    context('768px resolution - failed cases', () => {
        beforeEach(() => {
            cy.viewport(768, 480)

            cy.visit('/')
            cy.location('pathname').should('eq', '/')
            cy.title().should('eq', 'Pokémon Awesome')
        })

        it('can filter pokémon generations, but fail to search pokémon', () => {
            // toggle filter button
            cy.get('button[title="Filter"]').eq(0).click()

            // filter "Generation VIII"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.location('search').should('eq', '?gen=8')
            cy.contains('Grookey').should('be.visible')
            cy.get('.bg-emerald-500').should('be.visible')

            // search "cater"
            cy.get('input[type="text"]').type('cater').should('have.value', 'cater')
            cy.location('search').should('eq', '?q=cater&gen=8')
            cy.contains('No result').should('be.visible')
        })

        it('can filter pokémon types, but fail to search pokémon', () => {
            // toggle filter button
            cy.get('button[title="Filter"]').eq(0).click()

            // filter "Bug"
            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.location('search').should('eq', '?type=7')
            cy.contains('Caterpie').should('be.visible')
            cy.contains('NOTE:').should('be.visible')
            cy.get('.bg-emerald-500').should('be.visible')

            // search "bunny"
            cy.get('input[type="text"]').type('bunny').should('have.value', 'bunny')
            cy.location('search').should('eq', '?q=bunny&type=7')
            cy.contains('No result').should('be.visible')
        })

        it('can search pokémon, but fail to filter pokémon', () => {
            // search "pika"
            cy.get('input[type="text"]').type('pika').should('have.value', 'pika')
            cy.contains('Pikachu').should('be.visible')

            // toggle filter button
            cy.get('button[title="Filter"]').eq(0).click()

            // filter "Generation VIII" and "Bug"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.location('search').should('eq', '?q=pika&gen=8&type=7')
            cy.contains('No result').should('be.visible')
            cy.contains('NOTE:').should('be.visible')
            cy.get('.bg-emerald-500').should('be.visible')
        })

        it('can filter pokémon, but fail to search pokémon', () => {
            // toggle filter button
            cy.get('button[title="Filter"]').eq(0).click()

            // filter "Generation VIII" and "Bug"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.contains('Grookey').should('be.visible')

            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.contains('Blipbug').should('be.visible')
            cy.contains('NOTE:').should('be.visible')
            cy.get('.bg-emerald-500').should('be.visible')

            // search "pika"
            cy.get('input[type="text"]').type('pika').should('have.value', 'pika')
            cy.location('search').should('eq', '?q=pika&gen=8&type=7')
            cy.contains('No result').should('be.visible')
        })
    })

    context('iPhone XR resolution - success cases', () => {
        beforeEach(() => {
            cy.viewport('iphone-xr')

            cy.visit('/')
            cy.location('pathname').should('eq', '/')
            cy.title().should('eq', 'Pokémon Awesome')
        })

        it('can filter pokémon generations, then search pokémon', () => {
            // toggle filter button
            cy.get('button[title="Filter"]').eq(0).click()

            // filter "Generation VIII"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.location('search').should('eq', '?gen=8')
            cy.contains('Grookey').should('be.visible')
            cy.get('.bg-emerald-500').should('be.visible')

            // search "bunny"
            cy.get('input[type="text"]').type('bunny').should('have.value', 'bunny')
            cy.location('search').should('eq', '?q=bunny&gen=8')
            cy.contains('Scorbunny').should('be.visible')
        })

        it('can filter pokémon types, then search pokémon', () => {
            // toggle filter button
            cy.get('button[title="Filter"]').eq(0).click()

            // filter "Bug"
            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.location('search').should('eq', '?type=7')
            cy.contains('Caterpie').should('be.visible')
            cy.contains('NOTE:').should('be.visible')
            cy.get('.bg-emerald-500').should('be.visible')

            // search "cater"
            cy.get('input[type="text"]').type('cater').should('have.value', 'cater')
            cy.location('search').should('eq', '?q=cater&type=7')
            cy.contains('Caterpie').should('be.visible')
        })

        it('can search pokémon, then filter pokémon', () => {
            // search "dot"
            cy.get('input[type="text"]').type('dot').should('have.value', 'dot')
            cy.contains('Dottler').should('be.visible')

            // toggle filter button
            cy.get('button[title="Filter"]').eq(0).click()

            // filter "Generation VIII" and "Bug"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.contains('Dottler').should('be.visible')

            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.location('search').should('eq', '?q=dot&gen=8&type=7')
            cy.contains('Dottler').should('be.visible')
            cy.contains('NOTE:').should('be.visible')
            cy.get('.bg-emerald-500').should('be.visible')
        })

        it('can search and filter pokémon at once', () => {
            // toggle filter button
            cy.get('button[title="Filter"]').eq(0).click()

            // filter "Generation VIII" and "Bug"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.contains('Grookey').should('be.visible')

            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.contains('Blipbug').should('be.visible')
            cy.contains('NOTE:').should('be.visible')
            cy.get('.bg-emerald-500').should('be.visible')

            // search "dot"
            cy.get('input[type="text"]').type('dot').should('have.value', 'dot')
            cy.location('search').should('eq', '?q=dot&gen=8&type=7')
            cy.contains('Dottler').should('be.visible')
        })
    })

    context('iPhone XR resolution - failed cases', () => {
        beforeEach(() => {
            cy.viewport('iphone-xr')

            cy.visit('/')
            cy.location('pathname').should('eq', '/')
            cy.title().should('eq', 'Pokémon Awesome')
        })

        it('can filter pokémon generations, but fail to search pokémon', () => {
            // toggle filter button
            cy.get('button[title="Filter"]').eq(0).click()

            // filter "Generation VIII"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.location('search').should('eq', '?gen=8')
            cy.contains('Grookey').should('be.visible')
            cy.get('.bg-emerald-500').should('be.visible')

            // search "cater"
            cy.get('input[type="text"]').type('cater').should('have.value', 'cater')
            cy.location('search').should('eq', '?q=cater&gen=8')
            cy.contains('No result').should('be.visible')
        })

        it('can filter pokémon types, but fail to search pokémon', () => {
            // toggle filter button
            cy.get('button[title="Filter"]').eq(0).click()

            // filter "Bug"
            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.location('search').should('eq', '?type=7')
            cy.contains('Caterpie').should('be.visible')
            cy.contains('NOTE:').should('be.visible')
            cy.get('.bg-emerald-500').should('be.visible')

            // search "bunny"
            cy.get('input[type="text"]').type('bunny').should('have.value', 'bunny')
            cy.location('search').should('eq', '?q=bunny&type=7')
            cy.contains('No result').should('be.visible')
        })

        it('can search pokémon, but fail to filter pokémon', () => {
            // search "pika"
            cy.get('input[type="text"]').type('pika').should('have.value', 'pika')
            cy.contains('Pikachu').should('be.visible')

            // toggle filter button
            cy.get('button[title="Filter"]').eq(0).click()

            // filter "Generation VIII" and "Bug"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.location('search').should('eq', '?q=pika&gen=8&type=7')
            cy.contains('No result').should('be.visible')
            cy.contains('NOTE:').should('be.visible')
            cy.get('.bg-emerald-500').should('be.visible')
        })

        it('can filter pokémon, but fail to search pokémon', () => {
            // toggle filter button
            cy.get('button[title="Filter"]').eq(0).click()

            // filter "Generation VIII" and "Bug"
            cy.contains('select', 'All generations')
                .select('Generation VIII')
                .should('have.value', 8)
            cy.contains('Grookey').should('be.visible')

            cy.contains('select', 'All types').select('Bug').should('have.value', 7)
            cy.contains('Blipbug').should('be.visible')
            cy.contains('NOTE:').should('be.visible')
            cy.get('.bg-emerald-500').should('be.visible')

            // search "pika"
            cy.get('input[type="text"]').type('pika').should('have.value', 'pika')
            cy.location('search').should('eq', '?q=pika&gen=8&type=7')
            cy.contains('No result').should('be.visible')
        })
    })
})
