import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";
import AutoStore_Home_PO from "../../support/pageObjects/automation-test-store/AutoStore_HomePage_PO";
/// <reference types="Cypress" />
// /// <reference types="@cypress/xpath" />

describe("Test Add multiple items into basket vi automation-test-store", () => {
  const autoStoreHomePage = new AutoStore_Home_PO();
  const autoStore_hairPage = new AutoStore_HairCare_PO();
  before(function () {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });
  beforeEach(function () {
    // cy.visit("https://automationteststore.com/");
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    autoStoreHomePage.accessHomePage();
    autoStoreHomePage.clickOn_HairCare_Link();
  });
  it("Add specific item into basket", () => {
    autoStore_hairPage.addHairProductsToBasket();
  });
});
