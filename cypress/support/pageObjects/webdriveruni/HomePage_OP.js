class HomePage_OP {
  visitHomePage() {
    cy.visit(Cypress.env("webdriveruni_homePage"), { timeout: 60000 });
  }

  click_contactUs_button() {
    cy.get("#contact-us")
      .invoke("removeAttr", "target")
      .click({ force: true }, { timeout: 8000 });
  }
}

export default HomePage_OP;
