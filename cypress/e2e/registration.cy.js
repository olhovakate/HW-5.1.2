const logData = require("../fixtures/registrationData.json");
beforeEach(()=>{
    cy.visit(Cypress.env('environment1').baseUrl);
});
describe("Registration testing",()=>{ 
    it("Valid registration",()=>{
      const firstUserData = logData[0];

          cy.registration(firstUserData.username,firstUserData.email,firstUserData.firstPassword,firstUserData.secondPassword)
          cy.get('.invalid-feedback').should('not.exist')
        });

    it("Invalid registration testing",()=> {
        logData.slice(1).forEach((item)=> {
            cy.registration(item.username,item.email,item.firstPassword,item.secondPassword);
            cy.get('.invalid-feedback').should('exist');
        });
    });
});