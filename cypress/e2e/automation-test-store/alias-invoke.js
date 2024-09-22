/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

describe("Alias & Invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/")
      .get("a[href*='product/category&path=']")
      .contains("Hair Care")
      .click()

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail")
    cy.get("@productThumbnail").its("length").should("be.gt", 5)

    cy.get("@productThumbnail").should("include", "Seaweed Conditioner")
  })

  it.only("Validate product thumbnail", () => {
    cy.visit("https://automationteststore.com/")
    cy.get(".thumbnail").as("productThumbnail")
    cy.get("@productThumbnail").should("have.length", 16)
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart")
  })
})
