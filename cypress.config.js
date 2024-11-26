const { defineConfig } = require("cypress");

const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress/config", `${file}.json`);
  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file was found ");
    return {};
  }
  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: "537tjz",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || "";
      return getConfigurationByFile(file);
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    viewportHeight: 550,
    viewportWidth: 750,
    baseUrl: "https://www.webdriveruniversity.com",
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    env: {
      first_name: "Sarah",
      webdriveruni_homePage: "https://www.webdriveruniversity.com",
    },
  },
});
