import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tseslint from "@typescript-eslint/eslint-plugin"; // TypeScript ESLint plugin
import tsParser from "@typescript-eslint/parser"; // TypeScript parser

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // Specify files directly here
    languageOptions: {
      parser: tsParser, // Set TypeScript parser
      globals: globals.browser, // Include browser globals like window, document
    },

    plugins: {
      react: pluginReact, // Ensure the React plugin is referenced
      "@typescript-eslint": tseslint, // Ensure the TypeScript ESLint plugin is referenced
    },

    settings: {
      react: {
        version: "detect", // Automatically detects the React version
      },
    },

    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules, // TypeScript-specific linting rules
      ...pluginReact.configs.recommended.rules, // React-specific linting rules

      // Custom rules can be added here if needed
      "react/react-in-jsx-scope": "off", // Turn off React in scope for JSX if using React 17+
      "no-unused-vars": "warn"
    },
  },
];
