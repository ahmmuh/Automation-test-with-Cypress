/// <reference types="Cypress" />

describe("Test Upload file via webdriveruni", () => {
  it("Upload file....", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#myFile").selectFile("cypress/fixtures/card.png");
    cy.get("#submit-button").click();
  });
  it("No file upload", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#submit-button").click();
  });
});
