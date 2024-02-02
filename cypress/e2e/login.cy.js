const logData = require("../fixtures/loginData.json");

beforeEach(()=>{
    cy.visit(Cypress.env('environment1').baseUrl);
});

describe("Login testing",()=>{ 
    it("Valid Login", () => {
        cy.validLogin(
        Cypress.env('environment1').user.username, 
        Cypress.env('environment1').user.password);
        cy.get('#entity-menu').should('be.visible');
    });

    it(`Login with invalid data`, ()=> {
        logData.forEach((item,)=> {
            cy.validLogin(item.username,item.password);
            if (item.username || item.password){
                cy.get('[data-cy="loginError"]').should('exist');
            }

            cy.get('.btn-close').click();
            
        });
    });
})