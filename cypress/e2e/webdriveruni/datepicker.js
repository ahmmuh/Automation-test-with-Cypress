/// <reference types="Cypress" />

describe("Test of datepicker via webdriveruni", () => {
  it("Select date from the datepicker", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    cy.get("#datepicker").click();
    const date = new Date();
    date.setDate(date.getDate() + 80);

    let futureYear = date.getFullYear();
    let futureMonth = date.toLocaleString("default", { month: "long" });
    let futureDay = date.getDate();

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          const currentText = currentDate.text();
          const currentYear = parseInt(currentText.split(" ")[1], 10);
          //   const currentYear = parseInt(currentText.split(" ")[1], 10); // Korrekt indexering och bas

          const currentMonth = currentText.split(" ")[0];
          if (
            currentYear < futureYear ||
            (currentYear === futureYear && currentMonth !== futureMonth)
          ) {
            cy.get(".next").first().click();
            selectMonthAndYear();
            cy.log(currentDate.text());
          }
        });
    }
    function selectDay() {
      cy.get("[class='day']").contains(futureDay).click();
    }
    selectMonthAndYear();
    selectDay();
  });
});
