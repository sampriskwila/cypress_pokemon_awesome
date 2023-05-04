const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		baseUrl: 'https://pokemon-awesome.vercel.app',
		specPattern: 'cypress/e2e/**/*.spec.ts',
	},
});
