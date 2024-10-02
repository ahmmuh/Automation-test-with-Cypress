/// <reference types="Cypress" />

describe("JavaScript Alert", () => {
  it("Confirm JavaScript Alert contains the correct Text", () => {
    cy.visit("https://www.webdriveruniversity.com")
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true })

    cy.get("#button1").click()
    cy.on("window:alert", (str) => {
      expect(str).to.eq("I am an alert box!")
    })
  })

  //Js confirm

  it("Validate Js Confirm alert box works correctly when clicking OK ", () => {
    cy.visit("https://www.webdriveruniversity.com")
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true })

    cy.get("#button4").click()

    cy.on("window:confirm", (str) => {
      return true
    })

    cy.get("#confirm-alert-text").contains("You pressed OK!")
  })

  it("Validate Js Confirm alert box works correctly when clicking OK ", () => {
    cy.visit("https://www.webdriveruniversity.com")
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true })

    cy.get("#button4").click()

    cy.on("window:confirm", (str) => {
      return false
    })

    cy.get("#confirm-alert-text").contains("You pressed Cancel!")
  })

  // use stub

  it.only("Validate Js Confirm alert box works correctly when clicking OK ", () => {
    cy.visit("https://www.webdriveruniversity.com")
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true })

    const stub = cy.stub()
    cy.on("window:confirm", stub)

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!")
      })
      .then(() => {
        return true
      })
      .then(() => {
        cy.get("#confirm-alert-text").contains("You pressed OK!")
      })
  })
})
