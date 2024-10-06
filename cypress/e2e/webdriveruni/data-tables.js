/// <reference types="Cypress" />

describe("handlin data via webdriveuni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com");
    cy.get("#data-table")
      .should("exist")
      .invoke("removeAttr", "target")
      .click();
  });
  it("Calculate and assert the total age of all users", () => {
    var userDetails = [];
    let numb = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        var i;
        for (i = 1; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            numb += Number(userDetails[i]);
          }
        }
        cy.log("Found total age: " + numb);
        expect(numb).to.eq(322);
      });
  });

  it.only("Calculate and assert age for given user based on lastname", () => {
    cy.get("#thumbnail-1 td:nth-child(2").each(($el, index, $list) => {
      var text = $el.text();
      if (text.includes("Woods")) {
        cy.get("#thumbnail-1 td:nth-child(2")
          .eq(index)
          .next()
          .then((age) => {
            const userAge = age.text();
            expect(userAge).to.equal("80");
          });
      }
    });
  });
});
