/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

describe("Iterate Over Elements", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });
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
    cy.selectProduct("Curls to straight Shampoo");
  });

  it("Add specific product to basket", () => {
    cy.selectProduct("Seaweed Conditioner");
  });

  it("Add specific product to basket", () => {
    cy.selectProduct("Eau Parfumee au The Vert Shampoo");
  });
});
