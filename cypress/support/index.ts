declare namespace Cypress {
    interface Chainable<Subject = any> {
        compare_pokemon(search: string, expected: string): Chainable<any>
    }
}
