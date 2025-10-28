import { defineConfig } from "cypress" 
import codeCoverage from "@cypress/code-coverage/task"

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			codeCoverage(on, config)
			return config
		},
		baseUrl: "http://localhost:3000", // adjust if different
	},
	component: {
		devServer: {
			framework: "next",
			bundler: "webpack",
		},
	},
})
