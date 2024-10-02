/// <reference types="Cypress" />

describe("Cypress Web Security", () => {
  it("Validate two different domains", () => {
    cy.visit("https://www.webdriveruniversity.com/")
    cy.visit("https://automationteststore.com/")
  })

  it("Should not be able to submit a successfull submission contact us form as all fields required", () => {
    cy.log("Test ran")
  })
})
