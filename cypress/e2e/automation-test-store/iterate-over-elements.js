/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

describe("Iterate Over Elements", () => {
  //   it.only("Log Out informatio about all hair care product", () => {
  //     cy.visit("https://automationteststore.com/")
  //       .get("a[href*='product/category&path=']")
  //       .contains("Hair Care")
  //       .click()

  //     cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
  //       cy.log("Index of " + index + " : " + $el.text())
  //     })
  //   })

  it("Add specific product to basket", () => {
    cy.visit("https://automationteststore.com/")
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Curls to straight Shampoo")) {
        cy.wrap($el).click()
      }
    })
  })
})
