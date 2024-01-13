describe("Correct loading verifier page", () => {
    it("loading main page",()=>{
        Cypress.config("baseUrl","https://sqlverifier-live-6e21ca0ed768.herokuapp.com")
        cy.visit("/?page=1&sort=id,asc");
        cy.get('#header-tabs').should('not.have.id', 'docs-menu');
    });

    it('User have to enter in account', () => {
      cy.visit('/?page=1&sort=id,asc');
      cy.get('#account-menu').click();
      cy.get('#login-item').click();
  
      cy.get('input[name="username"]').type('kot');
      cy.get('input[name="password"]').type('654321');
  
      cy.get('button[type="submit"]').click();
      cy.get('#entity-menu').should('be.visible');
      
    

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
      cy.url().should('eq','https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc');
      

      //№4
      cy.get('#docs-menu').click();
      cy.get('#docs-menu >div >a').click();
      cy.url().should('include','/docs/docs');
      cy.get('#select',{ timeout: 10000 }).should('not.be.empty');


      //#5
      cy.get('#header-tabs > li:nth-child(4) > a').click();
      cy.contains('English').click();
      cy.get('#header-tabs').contains('Home');

      //#6
      cy.get('#header-tabs > li:nth-child(4) > a').click();
      cy.contains('Français').click();
      cy.get('#header-tabs').contains('Accueil');

      //#7
      cy.get('#header-tabs > li:nth-child(4) > a').click();
      cy.contains('Русский').click();
      cy.get('#header-tabs').contains('Главная');

      //#8
      cy.get('#header-tabs > li:nth-child(4) > a').click();
      cy.contains('Українська').click();
      cy.get('#header-tabs').contains('Головна');
      cy.get('#header-tabs > li:nth-child(4) > a').click();
      cy.contains('English').click();

      
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
      cy.get('#account-menu').click();
      cy.get('[data-cy="logout"]').click();
      cy.url().should('include','/logout');
      cy.get('div.p-5').should('include.text','Logged out successfully!');

      
    });

}) 