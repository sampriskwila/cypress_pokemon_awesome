declare namespace Cypress {
    interface Chainable<Subject = any> {
        comparePokemon(search: string, expected: string): Chainable<any>
    }
}
