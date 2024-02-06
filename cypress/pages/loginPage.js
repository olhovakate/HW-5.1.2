export class LoginPage{
    elements={
        loginField:() => cy.get('input[name="username"]'),
        passwordField:() =>cy.get('input[name="password"]'),
        submitButton:() => cy.get('button[type="submit"]')
    };

    login(username,password) {
        this.elements.loginField().type(username);
        this.elements.passwordField().type(password);
        this.elements.submitButton().click();
    };
}