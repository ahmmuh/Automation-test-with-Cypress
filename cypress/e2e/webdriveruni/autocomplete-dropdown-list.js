/// <reference types="Cypress" />

describe("Verify Autocomplete dropdown list via webdriveuni", () => {
  it("Select specific product via autocomplete lists ", () => {
    cy.visit("https://www.webdriveruniversity.com")
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true })
    cy.get("#myInput").type("A")
    cy.get("#myInputautocomplete-list > *")
      .each(($el, index, $list) => {
        const prod = $el.text()
        const productToSelect = "Avacado"

        if (prod === productToSelect) {
          $el.trigger("click")
          cy.get("#submit-button").click()
          cy.url().should("include", productToSelect)
        }
      })
      .then(() => {
        cy.get("#myInput").type("g")
        cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
          const prod = $el.text()
          const productToSelect = "Grapes"

          if (prod === productToSelect) {
            $el.trigger("click")
            cy.get("#submit-button").click()
            cy.url().should("include", productToSelect)
          }
        })
      })
  })
})
