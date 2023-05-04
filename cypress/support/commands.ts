Cypress.Commands.add('comparePokemon', (search: string, expected: string) => {
	cy.get('input[type="search"]').as('input');

	cy.get('@input').focus().type(search).should('have.value', search);
	cy.get('@input').next().find('ul').should('exist').and('contain', expected);

	if (expected !== 'Nothing found.') {
		cy.get('@input').type('{enter}');
		cy.wait(100);
	}
});
