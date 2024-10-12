/// <reference types="Cypress" />

// const cypress = require("cypress");

describe("Test Contact Us form via WebdriverUni", () => {
  before(() => {
    cy.fixture("example").then((data) => {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    cy.visit(
      Cypress.env("webdriveruni_homePage") + "/Contact-Us/contactus.html"
    );
  });
  it.only("Should be able to submit a successfull submission contact us form", () => {
    // cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
    // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

    // cy.get("#contact-us").click({ force: true });
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('[name="email"]').type(data.email);
    // cy.get("textarea.feedback-input").type("This is a feeedback");
    // cy.get('[type="submit"]').click();

    cy.webdriveruni_contactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "How can i learn it?",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a successfull submission contact us form as all fields required", () => {
    // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
    // cy.visit("/");
    // cy.get("#contact-us").click({ force: true });
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get("textarea.feedback-input").type("This is a feeedback");
    // cy.get('[type="submit"]').click();
    // cy.get("body").contains("Error: all fields are required");

    cy.webdriveruni_contactForm_Submission(
      data.first_name,
      data.last_name,
      data.email,
      " ",
      "How can i learn it?",
      "body",
      "Error: Invalid email address"
    );
  });
});
