describe("Verifier login-Ui", () => {
    before(()=>{
        cy.visit(Cypress.env('environment2').baseUrl);

    it.only("User can login",()=> { 
        cy.get('#account-menu').click();
        cy.get('#login-item').click();
        cy.get('input[name="username"]').type(student82);
        cy.get('input[name="password"]').type(963852);
        cy.get('button[type="submit"]').click();
      }); 
  });
});
