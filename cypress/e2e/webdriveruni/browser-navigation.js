/// <reference types="Cypress" />

describe("Validate webdriver university homePage links", () => {
  it.only("Confirm links redirect to the correct pages ", () => {
    cy.visit("https://www.webdriveruniversity.com")
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true })
    cy.url().should("include", "contactus")
    cy.go("back")
    cy.reload()
    //cy.reload(true) reload withoit cache
    cy.url().should("include", "https://www.webdriveruniversity.com")
    cy.go("forward")
    cy.url().should("include", "contactus")
    cy.go("back")
    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: true })

    cy.url().should("include", "Login-Portal")
    cy.go("back")

    cy.get("#to-do-list").invoke("removeAttr", "target").click({ force: true })
    cy.url().should("include", "To-Do-List")
    cy.go("back")
  })
})
