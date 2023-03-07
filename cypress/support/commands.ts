Cypress.Commands.add('compare_pokemon', (search: string, expected: string) => {
    cy.get('input[type="search"]').as('input')

    cy.get('@input').type(search).should('have.value', search)
    cy.get('@input').next().should('exist').and('contain', expected)

    if (expected !== 'Nothing found.') {
        cy.get('@input').type('{enter}')
    }
})
