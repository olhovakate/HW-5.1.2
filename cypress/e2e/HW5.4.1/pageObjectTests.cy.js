import { faker } from '@faker-js/faker';
import { LoginPage } from '../../pages/loginPage';
import { PasswordPage } from '../../pages/passwordPage';

describe("Verifier login-Ui", () => {
    before(()=>{
        cy.visit(Cypress.env('environment2').baseUrl);
    });

    it("User can login",()=> { 

        let loginPage = new LoginPage();
        let passwordPage= new PasswordPage();
        let username ="student82";
        let password="789456";
        let newPassword=faker.internet.password();

        cy.log(newPassword);
        
        cy.get('#account-menu').click();//valid login
        cy.get('#login-item').click();
        loginPage.login(username,password);
        cy.get('[data-cy="adminMenu"] > .d-flex').should('be.visible');  

        cy.get('#account-menu').click();//change password
        cy.get('[data-cy="passwordItem"] > span').click();
        passwordPage.changePassword(newPassword,password);
        cy.get('#account-menu').click();
        cy.get('[data-cy="logout"] > span').click();

        cy.get('#account-menu').click();//User can not login with old password
        cy.get('#login-item').click();
        loginPage.login(username,password);
        cy.get('[data-cy="loginError"] > span').should('exist');
    
        cy.get('[data-cy="password"]').clear().type(newPassword);//User can login with new password
        cy.get('[data-cy="submit"] > span').click();
        cy.get('[data-cy="adminMenu"] > .d-flex > span').should('be.visible');


        cy.get('#account-menu').click();
        cy.get('[data-cy="passwordItem"] > span').click();
        passwordPage.changePassword(newPassword,password);

      });
  });

