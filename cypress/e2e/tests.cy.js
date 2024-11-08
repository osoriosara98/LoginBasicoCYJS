describe('Pruebas de Login', () => {
  beforeEach(() => {
      cy.visit('https://www.saucedemo.com/'); 
  });

  it('login válido', () => {
      cy.loginValido();
      cy.url().should('include', '/inventory.html');
  });

  it('login invalido', () => {
      cy.loginInvalido();
      cy.get('.error-message-container.error').should('be.visible').and('have.text', 'Epic sadface: Username and password do not match any user in this service');
      
  });

  it('login bloqueado', () => {
    cy.loginBloqueado();
    cy.get('.error-message-container.error').should('be.visible').and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    
});

it('logout', () => {
  cy.loginValido();
  cy.url().should('include', '/inventory.html');
  cy.logout();
  cy.url().should('eq', 'https://www.saucedemo.com/');
});

});
