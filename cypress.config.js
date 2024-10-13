const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    pageLoadTimeout: 120000,
    baseUrl: "https://www.webdriveruniversity.com",
    env: {
      first_name: "Sarah",
      webdriveruni_homePage: "https://www.webdriveruniversity.com",
    },
  },
});
