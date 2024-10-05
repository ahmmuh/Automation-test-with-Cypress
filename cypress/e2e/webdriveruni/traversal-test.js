/// <reference types="Cypress" />

describe("Test using Traversal commands in Cypress", () => {
  it("Testa traversal", () => {
    cy.visit("http://webdriveruniversity.com")
    cy.get("#data-table").should("exist").invoke("removeAttr", "target").click()
    cy.url().should("include", "Data-Table")
    cy.get(".traversal-breadcrumb")
      .children(".active")
      .should("contain", "Contact Us")
  })

  it.only("closest() to validate the closest ancestor DOM element", () => {
    cy.get(".traversal-badge").closest("ul").should("have.class", "list-group")
  })
})
