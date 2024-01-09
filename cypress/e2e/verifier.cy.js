/*describe("First test suit",()=>{
    it("First test",()=>{
        cy.visit("https://example.cypress.io/todo");
    })
})*/

describe("test load verifier",()=>{
    it("loading page",()=>{
        cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc");
        cy.get('#task-heading', { timeout: 3000 }).should('have.text', 'Tasks');
    })
})