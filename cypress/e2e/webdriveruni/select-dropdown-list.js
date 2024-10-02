/// <reference types="Cypress" />

describe("Interact with droddown lists via webdriveruni", () => {
  it("Select specific value lists via select dropdown lists ", () => {
    cy.visit("https://www.webdriveruniversity.com")
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true })
    // cy.get("#dropdowm-menu-1").select("SQL").contains("SQL")
    cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven")
    cy.get("#dropdowm-menu-2").select("TestNG").contains("TestNG")
    // cy.get("#dropdowm-menu-3").select("javascript")
  })
})
