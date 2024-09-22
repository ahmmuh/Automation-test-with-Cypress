/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

describe("Verifying variables, Cypress Commands and JQuery commands", () => {
  it("Navigation to specific product pages", () => {
    cy.visit("https://automationteststore.com/")
    const makeupLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Makeup")
      .click()

    const skincareLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Skincare")
      .click()
  })

  //   it.only("Navigation to specific product pages", () => {
  //     cy.visit("https://automationteststore.com/")
  //       .get("a[href*='product/category&path=']")
  //       .contains("Makeup")
  //       .click()

  //     const header = cy.get("h1 .maintext").then(($headerText) => {
  //       const headerText = $headerText.text()
  //       expect(headerText).is.eq("Makeup")
  //       cy.log("founded header text: ", headerText)
  //     })
  //   })

  it.only("Validate Properties Of The Contact US Page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact")

    //Uses cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name")
    //JQuery Approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNameText = text.find("#field_11").text()
      expect(firstNameText).to.contain("First name")

      // Embedded commands (clorsures)

      cy.get("#field_11").then((fnText) => {
        cy.log(fnText.text())
        cy.log(fnText)
      })
    })
  })
})
