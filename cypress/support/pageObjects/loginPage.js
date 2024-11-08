class LoginPage {
    // Selectores: mapeo los selectores para que sean editables rapidamente en caso de que cambien
    getUsernameInput() {
        return cy.get('#user-name'); 
    }

    getPasswordInput() {
        return cy.get('#password'); 
    }

    getLoginButton() {
        return cy.get('#login-button'); 
    }

    // Métodos: nos ayuda a interactuar con los elementos 
    enterUsername(username) {
        this.getUsernameInput().type(username); // toma el elemento e inyecta el nombre de usuario en el campo username
    }

    enterPassword(password) {
        this.getPasswordInput().type(password);
    }

    clickLoginButton() {
        this.getLoginButton().click();
    }

    // Método para realizar el login completo
    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton();
    }
}

export default new LoginPage(); //  para usar esta instancia directamente en otros archivos sin necesidad de crear una nueva instancia cada vez.

/*Clase: Es el diseño o plantilla (como el plano de una casa).
Instancia: Es el objeto concreto creado a partir de la clase (como una casa construida a partir del plano).*/
