class HomePage_OP {
  visitHomePage() {
    cy.visit(Cypress.env("webdriveruni_homePage"));
  }

  click_contactUs_button() {
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
  }
}

export default HomePage_OP;
