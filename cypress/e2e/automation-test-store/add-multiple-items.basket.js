/// <reference types="Cypress" />
// /// <reference types="@cypress/xpath" />

describe("Test Add multiple items into basket vi automation-test-store", () => {
  before(function () {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });
  beforeEach(function () {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });
  it("Add specific item into basket", () => {
    globalThis.data.productName.forEach(function (element) {
      cy.addProductToBasket(element);
    });
    cy.get(".dropdown-toggle > .fa").click();
    cy.get("#cart_checkout1").click();
  });
});
