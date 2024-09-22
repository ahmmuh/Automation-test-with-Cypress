/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

describe("Test Contact Us form via WebdriverUni", () => {
  it("Should be able to submit a successfull submission contact us form", () => {
    cy.visit("https://automationteststore.com/")
    cy.get(".info_links_footer > :nth-child(5) > a")
      .click()
      .then((linkText) => {
        cy.log("Link Text: " + linkText.text())
      })
    cy.get("#ContactUsFrm_first_name").type("Abdinaasir Ahmed")
    cy.get("#ContactUsFrm_email").type("abdinaasir@gmail.com")
    cy.get("#ContactUsFrm_enquiry").type(
      "You enquiry has been sent to the Company"
    )
  })
})