const selectedEnvironment=Cypress.env('environment2');
describe("Correct loading verifier page", () => {
        /*it('should login using environment1 URL', () => {
          cy.visit(Cypress.env('environment1').baseUrl);
        });*/
        it('should login', () => {
          cy.loadingpage(selectedEnvironment);
        });
    
      it('User have to enter in account', () => {
        //cy.validLogin(Cypress.env('username'), Cypress.env('password'));
        cy.validLogin(selectedEnvironment);
      //1
        cy.get('#entity-menu').click();
        cy.get('#entity-menu >div >a:nth-child(1)').click();
        cy.url().should('include','/task?page=1&sort=id,asc');
        cy.get('#task-heading').should('include.text','Tasks');
    
      //2
        cy.get('#entity-menu').click();
        cy.get('#entity-menu >div >a:nth-child(2)').click();
        cy.url().should('include','/user-task');
        cy.get('#user-task-heading').should('include.text','User Tasks');

      //3
      
        cy.get('li[class="nav-item"]').should('be.visible').click();
        cy.url().should('eq','https://sqlverifier-staging-08050d656f7a.herokuapp.com/?page=1&sort=id,asc');
      

      //№4
        cy.get('#docs-menu').click();
        cy.get('#docs-menu >div >a').click();
        cy.url().should('include','/docs/docs');
        cy.get('#select',{ timeout: 10000 }).should('not.be.empty');


      //#5

        cy.switchLanguage('English', 'Home');
        cy.switchLanguage('Français', 'Accueil');
        cy.switchLanguage('Русский', 'Главная');
        cy.switchLanguage('Українська', 'Головна');
        cy.switchLanguage('English', 'Home');

      //№9
        cy.get('#account-menu').click();
        cy.get('#account-menu >div >a:nth-child(1)').click();
        cy.url().should('include','/account/settings');
        cy.get('#settings-title').should('include.text','User settings for');

      //№10
        cy.get('#account-menu').click();
        cy.get('[data-cy="passwordItem"]').click();
        cy.url().should('include','/account/password');
        cy.get('#password-title').should('include.text','Password for');

      //№11

        cy.logout();
    });
})
