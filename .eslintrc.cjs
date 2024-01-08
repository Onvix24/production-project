module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		"plugin:react/recommended",
		"plugin:i18next/recommended",
	],
	overrides: [
		{
			files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
			rules: {
				"i18next/no-literal-string": "off",
				"max-len": "off",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: [
		"@typescript-eslint", 
		"react", 
		"i18next", 
		"react-hooks"
	],
	rules: {
		"object-curly-spacing": ["warn", "always"],
		indent: ["error", "tab"],
		"linebreak-style": ["error", "windows"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"@typescript-eslint/no-unused-vars": "warn",
		// "no-unused-vars": "warn",
		"react/react-in-jsx-scope": "off",
		"import/extension": "off",
		"@typescript-eslint/ban-ts-comment": "warn",
		"@typescript-eslint/no-unused-vars": "warn",
		"no-underscore-dangle": "off",
		"i18next/no-literal-string": [
			"error",
			{
				markupOnly: true,
				ignoreAttribute: ["data-testid", "to"],
			},
		],
		"max-len": ["error", { ignoreComments: true, code: 120 }],
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": "error", // Checks effect dependencies
		"no-param-reassign": "off",
		"react/display-name": "off"
	},
	globals: {
		__IS_DEV__: true,
	},
	settings: {
		"react": {
		  "version": "detect" // або конкретна версія, наприклад "16.0"
		}
	}  
};
