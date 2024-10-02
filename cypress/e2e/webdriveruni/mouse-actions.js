/// <reference types="Cypress" />

describe("Test Mouse Actions", () => {
  it("Scroll element into view", () => {
    cy.visit("https://www.webdriveruniversity.com")
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true })
  })

  it("I should be able to drag and drop a dragable item", () => {
    cy.visit("https://www.webdriveruniversity.com")
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true })
    cy.get("#draggable").trigger("mousedown", { which: 1 })

    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true })
  })
})
