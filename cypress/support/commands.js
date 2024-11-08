import loginPage from './pageObjects/loginPage';

// Login válido
Cypress.Commands.add('loginValido', () => { // la funcion de cypress para crear comandos personalizados
    cy.fixture('credenciales').then((data) => {//carga un archivo de datos llamado example.json (que está en la carpeta fixtures). Este archivo que contiene credenciales de prueba.
        loginPage.login(data.validUsername, data.validPassword); // es una instancia de la clase LoginPage, que contiene un método login para realizar el proceso de login.
    });
});

// Login inválido
Cypress.Commands.add('loginInvalido', () => {
    cy.fixture('credenciales').then((data) => {
        loginPage.login(data.invalidUsername, data.invalidPassword);
    });


});

Cypress.Commands.add('loginBloqueado', () => {
    cy.fixture('credenciales').then((data) => {
        loginPage.login(data.blockedUsername, data.validPassword);
    });

    Cypress.Commands.add('logout', () => {
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    });
});

