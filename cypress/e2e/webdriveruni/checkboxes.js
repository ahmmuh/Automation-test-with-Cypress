/// <reference types="Cypress" />

describe("Check & Checkboxes", () => {
  beforeEach(() => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Validate check AND Checkboxes", () => {
    // cy.get("#checkboxes > :nth-child(1) > input").check()
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    // cy.get("@option-1").check()
    cy.get("@option-1").check().should("be.checked");
  });

  it("Validate uncheck AND Checkboxes", () => {
    // cy.get("#checkboxes > :nth-child(1) > input").check()
    cy.get("#checkboxes > :nth-child(5) > input").as("option-5");

    cy.get("@option-5").uncheck();
    cy.get("@option-5").should("not.be.checked");
  });

  it.only("One Command to uncheck multiple Checkboxes", () => {
    // cy.get("#checkboxes > :nth-child(1) > input").check()
    cy.get('[type="checkbox"]').as("checkboxes");

    cy.get("@checkboxes").check().should("be.checked");

    cy.get("@checkboxes").uncheck().should("not.be.checked");
  });
});
