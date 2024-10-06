/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  before(() => {
    cy.fixture("example").then((data) => {
      globalThis.data = data;
    });
  });
  it.only("Should be able to submit a successfull submission contact us form", () => {
    cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
    // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });

    // cy.get("#contact-us").click({ force: true });
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('[name="email"]').type(data.email);
    cy.get("textarea.feedback-input").type("This is a feeedback");
    cy.get('[type="submit"]').click();
  });

  it("Should not be able to submit a successfull submission contact us form as all fields required", () => {
    // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#contact-us").click({ force: true });
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get("textarea.feedback-input").type("This is a feeedback");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});
