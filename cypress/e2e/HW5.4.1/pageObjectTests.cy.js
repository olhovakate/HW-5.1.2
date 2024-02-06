import { faker } from '@faker-js/faker';
//import { LoginPage } from '../../pages/loginPage';
//import { PasswordPage } from '../../pages/passwordPage';
const loginPageElements = require('../../fixtures/pages.js/loginPageSelectors.json')
const passwordPageElements = require('../../fixtures/pages.js/passwordPageSelectors.json')

describe("Verifier login-Ui", () => {
    before(()=>{
        cy.visit(Cypress.env('environment2').baseUrl);
    });

    it("User can login",()=> { 

        //let loginPage = new LoginPage();
        //let passwordPage= new PasswordPage();
        let username ="Madonna24";
        let password="789456";
        let newPassword=faker.internet.password();

        cy.log(newPassword);
        
        cy.get('#account-menu').click();//valid login
        cy.get('#login-item').click();
        cy.get(loginPageElements.loginField).type(username);
        cy.get(loginPageElements.passwordField).type(password);
        cy.get(loginPageElements.submitButton).click();
        cy.get('[data-cy="adminMenu"] > .d-flex').should('be.visible');  

        cy.get('#account-menu').click();//change password
        cy.get('[data-cy="passwordItem"] > span').click();
        cy.get(passwordPageElements.currentPasswordField).type(password);
        cy.get(passwordPageElements.newPasswordField).type(newPassword);
        cy.get(passwordPageElements.confirmNewPassword).type(newPassword);
        cy.get(passwordPageElements.submitButton).click();
        cy.get('#account-menu').click();
        cy.get('[data-cy="logout"] > span').click();

        cy.get('#account-menu').click();//User can not login with old password
        cy.get('#login-item').click();
        cy.get(loginPageElements.loginField).type(username);
        cy.get(loginPageElements.passwordField).type(password);
        cy.get(loginPageElements.submitButton).click();
        cy.get('[data-cy="loginError"] > span').should('exist');
    
        cy.get('[data-cy="password"]').clear().type(newPassword);//User can login with new password
        cy.get('[data-cy="submit"] > span').click();
        cy.get('[data-cy="adminMenu"] > .d-flex > span').should('be.visible');


        cy.get('#account-menu').click();
        cy.get('[data-cy="passwordItem"] > span').click();
        cy.get(passwordPageElements.currentPasswordField).type(newPassword);
        cy.get(passwordPageElements.newPasswordField).type(password);
        cy.get(passwordPageElements.confirmNewPassword).type(password);
        cy.get(passwordPageElements.submitButton).click();

      });
  });

