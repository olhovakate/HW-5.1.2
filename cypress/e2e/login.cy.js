const logData = require("../../fixtures/loginData.json");

before(()=>{
    cy.visit(Cypress.env('environment1').baseUrl);
});

describe("Login testing",()=>{ 
    it("Valid Login", () => {
        cy.validLogin(
        Cypress.env('environment1').user.username, 
        Cypress.env('environment1').user.password);
        cy.get('#entity-menu').should('be.visible');
    });

    it("Invalid login testing",()=> {
        logData.forEach((item)=> {
            cy.validLogin(item.username,item.password);
        });
    });
})