// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('registration',(username,email,password,confirmPassword) => {
    cy.get('#account-menu').click();
    cy.get('[data-cy="register"]').click();
    if (username !=="") {
    cy.get('input[name="username"]').type(username);
    }
    if (email !=="") {
    cy.get('input[name="email"]').type(email);
    }
    if (password !=="") {
    cy.get('input[name="firstPassword"]').type(password);
    }
    if (confirmPassword !=="") {
    cy.get('input[name="secondPassword"]').type(confirmPassword);
    }
    cy.get('#register-submit').click();
});

Cypress.Commands.add('validLogin',(username,password) => {
    cy.get('#account-menu').click();
    cy.get('#login-item').click();

    if (username !=="") {
    cy.get('input[name="username"]').type(username);
    }
    if (password !=="") {
    cy.get('input[name="password"]').type(password);
    }
    cy.get('button[type="submit"]').click();
  });
  
  Cypress.Commands.add('switchLanguage', (language, expectedText) => {
    cy.get('#header-tabs > li:nth-child(4) > a').click();
    cy.contains(language).click();
    cy.get('#header-tabs').contains(expectedText).should('be.visible');
  });

  Cypress.Commands.add('logout', () => {
    cy.get('#account-menu').click();
    cy.get('[data-cy="logout"]').click();
    cy.url().should('include', '/logout');
    cy.get('div.p-5').should('include.text', 'Logged out successfully!');
  });
  