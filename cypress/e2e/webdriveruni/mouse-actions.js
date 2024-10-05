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

  it("I should able to peform double mouse click", () => {
    cy.visit("https://www.webdriveruniversity.com")
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true })

    cy.get("#double-click").dblclick()
  })

  it.only("I should able to hold the left mouse click button on a given element", () => {
    cy.visit("https://www.webdriveruniversity.com")
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true })

    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($element) => {
        expect($element).to.have.css("backgroundColor", "rgb(0, 255, 0)")
      })
  })
})
