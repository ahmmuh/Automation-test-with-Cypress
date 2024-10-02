/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

describe("Alias & Invoke", () => {
  // it("Validate a specific hair care product", () => {
  //   cy.visit("https://automationteststore.com/")
  //     .get("a[href*='product/category&path=']")
  //     .contains("Hair Care")
  //     .click()

  //   cy.get(".fixed_wrapper .prdocutname")
  //     .eq(0)
  //     .invoke("text")
  //     .as("productThumbnail")
  //   cy.get("@productThumbnail").its("length").should("be.gt", 5)

  //   cy.get("@productThumbnail").should("include", "Seaweed Conditioner")
  // })

  // it("Validate product thumbnail", () => {
  //   cy.visit("https://automationteststore.com/")
  //   cy.get(".thumbnail").as("productThumbnail")
  //   cy.get("@productThumbnail").should("have.length", 16)
  //   cy.get("@productThumbnail")
  //     .find(".productcart")
  //     .invoke("attr", "title")
  //     .should("include", "Add to Cart")
  // })

  it("Calculate total of normal and sell products", () => {
    // cy.visit("https://automationteststore.com/")
    // cy.get(".thumbnail").as("productThumbnail")
    // cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice")
    // cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItem")
    // cy.get("@saleItem").then(($sellItem) => {
    //   var saleItem = $sellItem.split("$")
    //   cy.log("Sell Item Price is : " + saleItem)
    //   var sellItemPriceTotal = 0
    //   var i = 0
    //   for (i = 0; i < saleItem.length; i++) {
    //     sellItemPriceTotal += Number(saleItem[i])
    //   }
    //   cy.log("Sell Items Total Price is : " + sellItemPriceTotal)
    // })
    // var totalItemsPrice = 0
    // cy.get("@itemPrice")
    //   .then(($linkText) => {
    //     var totalPrice = 0
    //     var itemPrice = $linkText.split("$")
    //     var i
    //     for (i = 0; i < itemPrice.length; i++) {
    //       cy.log(itemPrice[i])
    //       totalPrice += Number(itemPrice[i])
    //     }
    //     cy.log("None Sell Items Total Price is : " + totalPrice)
    //   })
    //   .then(() => {
    //     cy.log("The Total Price is: " + totalItemsPrice)
    //     // expect(itemPrice).to.eql(648.5)
    //   })
    // cy.get("@productThumbnail")
    //   .find(".oneprice")
    //   .each(($el, index, $list) => {
    //     const price = $el.text();
    //     cy.log("The founded price is: " + price)
    //   })
    // cy.get("@productThumbnail")
    //   .find(".pricenew")
    //   .each(($el, index, $list) => {
    //     const newPrice = $el.text()
    //     cy.log("The new price is: " + newPrice)
    //   })
    // cy.get("@productThumbnail")
    //   .find(".priceold")
    //   .each(($el, index, $list) => {
    //     const oldPrice = $el.text()
    //     cy.log("The OLD price is: " + oldPrice)
    //   })
  })

  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/")

    // Capture sale items prices
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItem")

    cy.get("@saleItem").then(($sellItem) => {
      // Split the price string and filter out any empty strings
      var saleItem = $sellItem.split("$").filter(Boolean)
      cy.log("Sell Item Price Array: " + saleItem)
      var sellItemPriceTotal = 0

      // Loop through sale items and calculate the total price
      saleItem.forEach((price) => {
        sellItemPriceTotal += Number(price)
      })
      cy.log("Sell Items Total Price: $" + sellItemPriceTotal)

      // Now capture non-sale items
      cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice")

      cy.get("@itemPrice").then(($itemPrice) => {
        // Split the price string and filter out empty strings
        var itemPrice = $itemPrice.split("$").filter(Boolean)
        cy.log("Normal Item Price Array: " + itemPrice)
        var normalItemPriceTotal = 0

        // Loop through normal items and calculate the total price
        itemPrice.forEach((price) => {
          normalItemPriceTotal += Number(price)
        })
        cy.log("Normal Items Total Price: $" + normalItemPriceTotal)

        // Calculate the total of both normal and sale items
        const totalItemsPrice = sellItemPriceTotal + normalItemPriceTotal
        cy.log("The Total Price is: $" + totalItemsPrice)
        expect(totalItemsPrice).to.eql(6481.5)
      })
    })
  })
})
