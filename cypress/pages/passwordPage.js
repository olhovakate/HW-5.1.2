export class PasswordPage{
    elements={
        currentPasswordField:() => cy.get('[data-cy="currentPassword"]'),
        newPasswordField:() =>cy.get('[data-cy="newPassword"]'),
        confirmNewPassword:() => cy.get('[data-cy="confirmPassword"]'),
        submitButton:() => cy.get('[data-cy="submit"] > span')
    };

    changePassword(newPassword,password) {
        this.elements.currentPasswordField().type(password);
        this.elements.newPasswordField().type(newPassword);
        this.elements.confirmNewPassword().type(newPassword);
        this.elements.submitButton().click();

    };
}