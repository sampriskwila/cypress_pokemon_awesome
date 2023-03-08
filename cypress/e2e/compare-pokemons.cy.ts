describe('Compare Pokémons', () => {
    context('1440px resolution - success cases', () => {
        beforeEach(() => {
            cy.viewport(1440, 1080)

            cy.visit('/compare')
            cy.location('pathname').should('eq', '/compare')
            cy.title().should('eq', 'Compare Pokémons | Pokémon Awesome')
            cy.contains('Compare Pokémons').should('be.visible')
        })

        it('can clear search field when click others', () => {
            // type "pic", but click others
            cy.get('input[type="search"]').type('pic')
            cy.get('body').click()

            // search field become empty and not focus
            cy.get('input[type="search"]').should('be.empty').and('not.be.focused')
        })

        it('can compare two pokémons, then view pokémon detail', () => {
            // search "pic"
            cy.comparePokemon('pic', 'Pichu')
            cy.location('search').should('eq', '?pokemons=pichu')
            cy.contains('Compare Pichu with...').should('be.visible')
            cy.contains('VS').should('be.visible')

            // search "pika"
            cy.comparePokemon('pika', 'Pikachu')
            cy.location('search').should('eq', '?pokemons=pichu,pikachu')
            cy.get('.pokemon-elm > img').should('be.visible')
            cy.contains('Pichu vs Pikachu').should('be.visible')

            // then view "Pichu" details
            cy.contains('a', 'Details →').first().click()
            cy.location('pathname').should('eq', '/pokemon/pichu')
        })

        it('can compare three pokémons, and delete last pokémon', () => {
            // search "pic, pika, rai"
            cy.comparePokemon('pic', 'Pichu')
            cy.comparePokemon('pika', 'Pikachu')
            cy.comparePokemon('rai', 'Raichu')
            cy.location('search').should('eq', '?pokemons=pichu,pikachu,raichu')
            cy.get('.pokemon-elm > img').should('be.visible')
            cy.contains('Pichu vs Pikachu vs Raichu').should('be.visible')

            // delete last pokémon
            cy.get('button')
                .should('have.class', 'top-0.5')
                .and('be.visible')
                .and('have.length.gt', 1)
                .last()
                .click()
            cy.contains('Raichu').should('not.exist')
            cy.contains('Pichu vs Pikachu').should('be.visible')
            cy.location('search').should('eq', '?pokemons=pichu,pikachu')
        })

        it('can compare five pokémons, and toggle expand button', () => {
            // search "pic, pika, rai, bul, ivy"
            cy.comparePokemon('pic', 'Pichu')
            cy.comparePokemon('pika', 'Pikachu')
            cy.comparePokemon('rai', 'Raichu')
            cy.comparePokemon('bul', 'Bulbasaur')
            cy.comparePokemon('ivy', 'Ivysaur')
            cy.location('search').should('eq', '?pokemons=pichu,pikachu,raichu,bulbasaur,ivysaur')
            cy.get('.pokemon-elm > img').should('be.visible')
            cy.contains('Pichu vs Pikachu vs Raichu vs Bulbasaur vs Ivysaur').should('be.visible')

            // toggle expand button
            cy.get('button[title="Toggle expand"]').should('be.visible').click()
            cy.get('#_nav').should('not.be.visible')
        })

        it('can compare up to ten pokémons, and hide search field', () => {
            // search "pic, pika, rai, bul, ivy, venu, squi, war, blas, gas"
            cy.comparePokemon('pic', 'Pichu')
            cy.comparePokemon('pika', 'Pikachu')
            cy.comparePokemon('rai', 'Raichu')
            cy.comparePokemon('bul', 'Bulbasaur')
            cy.comparePokemon('ivy', 'Ivysaur')
            cy.comparePokemon('venu', 'Venusaur')
            cy.comparePokemon('squi', 'Squirtle')
            cy.comparePokemon('war', 'Wartortle')
            cy.comparePokemon('blas', 'Blastoise')
            cy.comparePokemon('gas', 'Gastly')
            cy.location('search').should(
                'eq',
                '?pokemons=pichu,pikachu,raichu,bulbasaur,ivysaur,venusaur,squirtle,wartortle,blastoise,gastly',
            )
            cy.get('.pokemon-elm > img').should('be.visible')
            cy.contains(
                'Pichu vs Pikachu vs Raichu vs Bulbasaur vs Ivysaur vs Venusaur vs Squirtle vs Wartortle vs Blastoise vs Gastly',
            ).should('be.visible')

            // search field not exist
            cy.get('input[type="search"]').should('not.exist')
        })
    })

    context('1440px resolution - failed cases', () => {
        beforeEach(() => {
            cy.viewport(1440, 1080)

            cy.visit('/compare')
            cy.location('pathname').should('eq', '/compare')
            cy.title().should('eq', 'Compare Pokémons | Pokémon Awesome')
            cy.contains('Compare Pokémons').should('be.visible')
        })

        it('fail to search not existed pokémon', () => {
            // search "digimon"
            cy.comparePokemon('digimon', 'Nothing found.')
            cy.location('search').should('be.empty')
        })
    })

    context('768px resolution - success cases', () => {
        beforeEach(() => {
            cy.viewport(768, 480)

            cy.visit('/compare')
            cy.location('pathname').should('eq', '/compare')
            cy.title().should('eq', 'Compare Pokémons | Pokémon Awesome')
            cy.contains('Compare Pokémons').should('be.visible')
        })

        it('can clear search field when click others', () => {
            // type "pic", but click others
            cy.get('input[type="search"]').type('pic')
            cy.get('body').click()

            // search field become empty and not focus
            cy.get('input[type="search"]').should('be.empty').and('not.be.focused')
        })

        it('can compare two pokémons, then view pokémon detail', () => {
            // search "pic"
            cy.comparePokemon('pic', 'Pichu')
            cy.location('search').should('eq', '?pokemons=pichu')
            cy.contains('Compare Pichu with...').should('be.visible')
            cy.contains('VS').should('be.visible')

            // search "pika"
            cy.comparePokemon('pika', 'Pikachu')
            cy.location('search').should('eq', '?pokemons=pichu,pikachu')
            cy.get('.pokemon-elm > img').should('be.visible')
            cy.contains('Pichu vs Pikachu')

            // then view "Pichu" details
            cy.contains('a', 'Details →').first().click()
            cy.location('pathname').should('eq', '/pokemon/pichu')
        })

        it('can compare three pokémons, and delete last pokémon', () => {
            // search "pic, pika, rai"
            cy.comparePokemon('pic', 'Pichu')
            cy.comparePokemon('pika', 'Pikachu')
            cy.comparePokemon('rai', 'Raichu')
            cy.location('search').should('eq', '?pokemons=pichu,pikachu,raichu')
            cy.get('.pokemon-elm > img').should('be.visible')
            cy.contains('Pichu vs Pikachu vs Raichu').should('be.visible')

            // delete last pokémon
            cy.get('button')
                .should('have.class', 'top-0.5')
                .and('be.visible')
                .and('have.length.gt', 1)
                .last()
                .click()
            cy.contains('Raichu').should('not.exist')
            cy.contains('Pichu vs Pikachu')
            cy.location('search').should('eq', '?pokemons=pichu,pikachu')
        })

        it('can compare up to ten pokémons, and hide search field', () => {
            // search "pic, pika, rai, bul, ivy, venu, squi, war, blas, gas"
            cy.comparePokemon('pic', 'Pichu')
            cy.comparePokemon('pika', 'Pikachu')
            cy.comparePokemon('rai', 'Raichu')
            cy.comparePokemon('bul', 'Bulbasaur')
            cy.comparePokemon('ivy', 'Ivysaur')
            cy.comparePokemon('venu', 'Venusaur')
            cy.comparePokemon('squi', 'Squirtle')
            cy.comparePokemon('war', 'Wartortle')
            cy.comparePokemon('blas', 'Blastoise')
            cy.comparePokemon('gas', 'Gastly')
            cy.location('search').should(
                'eq',
                '?pokemons=pichu,pikachu,raichu,bulbasaur,ivysaur,venusaur,squirtle,wartortle,blastoise,gastly',
            )
            cy.get('.pokemon-elm > img').should('be.visible')
            cy.contains(
                'Pichu vs Pikachu vs Raichu vs Bulbasaur vs Ivysaur vs Venusaur vs Squirtle vs Wartortle vs Blastoise vs Gastly',
            ).should('be.visible')

            // search field not exist
            cy.get('input[type="search"]').should('not.exist')
        })
    })

    context('768px resolution - failed cases', () => {
        beforeEach(() => {
            cy.viewport(768, 480)

            cy.visit('/compare')
            cy.location('pathname').should('eq', '/compare')
            cy.title().should('eq', 'Compare Pokémons | Pokémon Awesome')
            cy.contains('Compare Pokémons').should('be.visible')
        })

        it('fail to search not existed pokémon', () => {
            // search "digimon"
            cy.comparePokemon('digimon', 'Nothing found.')
            cy.location('search').should('be.empty')
        })
    })

    context('iPhone XR resolution - success cases', () => {
        beforeEach(() => {
            cy.viewport('iphone-xr')

            cy.visit('/compare')
            cy.location('pathname').should('eq', '/compare')
            cy.title().should('eq', 'Compare Pokémons | Pokémon Awesome')
            cy.contains('Compare Pokémons').should('be.visible')
        })

        it('can clear search field when click others', () => {
            // type "pic", but click others
            cy.get('input[type="search"]').type('pic')
            cy.get('body').click()

            // search field become empty and not focus
            cy.get('input[type="search"]').should('be.empty').and('not.be.focused')
        })

        it('can compare two pokémons, then view pokémon detail', () => {
            // search "pic"
            cy.comparePokemon('pic', 'Pichu')
            cy.location('search').should('eq', '?pokemons=pichu')
            cy.contains('Compare Pichu with...').should('be.visible')
            cy.contains('VS').should('be.visible')

            // search "pika"
            cy.comparePokemon('pika', 'Pikachu')
            cy.location('search').should('eq', '?pokemons=pichu,pikachu')
            cy.get('.pokemon-elm > img').should('be.visible')
            cy.contains('Pichu vs Pikachu')

            // then view "Pichu" details
            cy.contains('a', 'Details →').first().click()
            cy.location('pathname').should('eq', '/pokemon/pichu')
        })

        it('can compare three pokémons, and delete last pokémon', () => {
            // search "pic, pika, rai"
            cy.comparePokemon('pic', 'Pichu')
            cy.comparePokemon('pika', 'Pikachu')
            cy.comparePokemon('rai', 'Raichu')
            cy.location('search').should('eq', '?pokemons=pichu,pikachu,raichu')
            cy.get('.pokemon-elm > img').should('be.visible')
            cy.contains('Pichu vs Pikachu vs Raichu').should('be.visible')

            // delete last pokémon
            cy.get('button')
                .should('have.class', 'top-0.5')
                .and('be.visible')
                .and('have.length.gt', 1)
                .last()
                .click()
            cy.contains('Raichu').should('not.exist')
            cy.contains('Pichu vs Pikachu')
            cy.location('search').should('eq', '?pokemons=pichu,pikachu')
        })

        it('can compare up to ten pokémons, and hide search field', () => {
            // search "pic, pika, rai, bul, ivy, venu, squi, war, blas, gas"
            cy.comparePokemon('pic', 'Pichu')
            cy.comparePokemon('pika', 'Pikachu')
            cy.comparePokemon('rai', 'Raichu')
            cy.comparePokemon('bul', 'Bulbasaur')
            cy.comparePokemon('ivy', 'Ivysaur')
            cy.comparePokemon('venu', 'Venusaur')
            cy.comparePokemon('squi', 'Squirtle')
            cy.comparePokemon('war', 'Wartortle')
            cy.comparePokemon('blas', 'Blastoise')
            cy.comparePokemon('gas', 'Gastly')
            cy.location('search').should(
                'eq',
                '?pokemons=pichu,pikachu,raichu,bulbasaur,ivysaur,venusaur,squirtle,wartortle,blastoise,gastly',
            )
            cy.get('.pokemon-elm > img').should('be.visible')
            cy.contains(
                'Pichu vs Pikachu vs Raichu vs Bulbasaur vs Ivysaur vs Venusaur vs Squirtle vs Wartortle vs Blastoise vs Gastly',
            ).should('be.visible')

            // search field not exist
            cy.get('input[type="search"]').should('not.exist')
        })
    })

    context('iPhone XR resolution - failed cases', () => {
        beforeEach(() => {
            cy.viewport('iphone-xr')

            cy.visit('/compare')
            cy.location('pathname').should('eq', '/compare')
            cy.title().should('eq', 'Compare Pokémons | Pokémon Awesome')
            cy.contains('Compare Pokémons').should('be.visible')
        })

        it('fail to search not existed pokémon', () => {
            // search "digimon"
            cy.comparePokemon('digimon', 'Nothing found.')
            cy.location('search').should('be.empty')
        })
    })
})
