class AutoStore_HairCare_PO {
  addHairProductsToBasket() {
    globalThis.data.productName.forEach(function (element) {
      cy.addProductToBasket(element).then(() =>{
        // debugger
      });
    });
    cy.get(".dropdown-toggle > .fa").click().debug();
    cy.get("#cart_checkout1").click();
  }
}

export default AutoStore_HairCare_PO;