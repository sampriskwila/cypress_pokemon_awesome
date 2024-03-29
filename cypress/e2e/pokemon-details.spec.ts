describe('Pokémon Details', () => {
	context('1440px resolution', () => {
		beforeEach(() => {
			cy.viewport(1440, 1080);

			cy.visit('/');
			cy.title().should('eq', 'Pokémon Awesome');

			cy.get('.pokemon-card').first().click();
			cy.location('pathname').should('eq', '/pokemon/bulbasaur');
			cy.title().should('eq', 'Bulbasaur #001 | Pokémon Awesome');
		});

		it('can view evolution details', () => {
			// click "Ivysaur"
			cy.contains('a', 'Ivysaur').click();
			cy.location('pathname').should('eq', '/pokemon/ivysaur');
			cy.contains('#002').should('be.visible');

			// click "Venusaur"
			cy.contains('a', 'Venusaur').click();
			cy.location('pathname').should('eq', '/pokemon/venusaur');
			cy.contains('#003').should('be.visible');
		});

		it('can compare with other pokémons', () => {
			// search "ivy" and display Ivysaur
			cy.comparePokemon('ivy', 'Ivysaur');
		});
	});

	context('768px resolution', () => {
		beforeEach(() => {
			cy.viewport(768, 480);

			cy.visit('/');
			cy.title().should('eq', 'Pokémon Awesome');

			cy.get('.pokemon-card').first().click();
			cy.location('pathname').should('eq', '/pokemon/bulbasaur');
			cy.title().should('eq', 'Bulbasaur #001 | Pokémon Awesome');
		});

		it('can view evolution details', () => {
			// click "Ivysaur"
			cy.contains('a', 'Ivysaur').click();
			cy.location('pathname').should('eq', '/pokemon/ivysaur');
			cy.contains('#002').should('be.visible');

			// click "Venusaur"
			cy.contains('a', 'Venusaur').click();
			cy.location('pathname').should('eq', '/pokemon/venusaur');
			cy.contains('#003').should('be.visible');
		});

		it('can compare with other pokémons', () => {
			// search "ivy" and display Ivysaur
			cy.comparePokemon('ivy', 'Ivysaur');
		});
	});

	context('iPhone XR resolution', () => {
		beforeEach(() => {
			cy.viewport('iphone-xr');

			cy.visit('/');
			cy.title().should('eq', 'Pokémon Awesome');

			cy.get('.pokemon-card').first().click();
			cy.location('pathname').should('eq', '/pokemon/bulbasaur');
			cy.title().should('eq', 'Bulbasaur #001 | Pokémon Awesome');
		});

		it('can view evolution details', () => {
			// click "Ivysaur"
			cy.contains('a', 'Ivysaur').click();
			cy.location('pathname').should('eq', '/pokemon/ivysaur');
			cy.contains('#002').should('be.visible');

			// click "Venusaur"
			cy.contains('a', 'Venusaur').click();
			cy.location('pathname').should('eq', '/pokemon/venusaur');
			cy.contains('#003').should('be.visible');
		});

		it('can compare with other pokémons', () => {
			// search "ivy" and display Ivysaur
			cy.comparePokemon('ivy', 'Ivysaur');
		});
	});
});
