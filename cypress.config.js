const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'atsy5g',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
