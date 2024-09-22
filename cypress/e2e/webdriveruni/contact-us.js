/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  it.only("Should be able to submit a successfull submission contact us form", () => {
    cy.document().should("have.a.property", "charset").and("eq", "UTF-8")
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
    cy.title().should("include", " Contact Us")
    // cy.get("#contact-us").click({ force: true })
    cy.get('[name="first_name"]').type("Ahmed")
    cy.get('[name="last_name"]').type("Muhammed")
    cy.get('[name="email"]').type("mukhtar1100@hotmail.com")
    cy.get("textarea.feedback-input").type("This is a feeedback")
    cy.get('[type="submit"]').click()
  })

  it("Should not be able to submit a successfull submission contact us form as all fields required", () => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
    cy.get('[name="first_name"]').type("Ahmed")
    cy.get('[name="last_name"]').type("Muhammed")
    cy.get("textarea.feedback-input").type("This is a feeedback")
    cy.get('[type="submit"]').click()
    cy.get("body").contains("Error: all fields are required")
  })
})
