/// <reference types="Cypress" />

describe("Verify radio buttons with webdriveruni", () => {
  before(function () {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("check specific radio buttons", () => {
    cy.get("#radio-buttons").find("input[type='radio']").first().check();
    cy.get("#radio-buttons").find("input[type='radio']").eq(4).check();
  });

  it.only("Validate state of specific radio buttons", () => {
    cy.get("[value='lettuce']").should("not.be.checked");
    cy.get("[value='pumpkin']").should("be.checked");
    cy.get("[value='cabbage']").should("be.disabled");
  });
});
