class inventoryPage {
    // Selectores: mapeo los selectores para que sean editables rapidamente en caso de que cambien
    getDropdown() {
        return cy.get('#react-burger-menu-btn'); 
    }

    getLogoutButton() {
        return cy.get('#logout_sidebar_link'); 
    
    }

    // Método para realizar el logout completo
    // Método para realizar el logout completo
logout() {
    this.getDropdown().click();  // Hacer clic en el menú desplegable
    this.getLogoutButton().click();  // Hacer clic en el botón de logout
}

}

export default new LoginPage(); //  para usar esta instancia directamente en otros archivos sin necesidad de crear una nueva instancia cada vez.

/*Clase: Es el diseño o plantilla (como el plano de una casa).
Instancia: Es el objeto concreto creado a partir de la clase (como una casa construida a partir del plano).*/
