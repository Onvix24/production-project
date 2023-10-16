module.exports = {
	env: {
		"browser": true,
		"es2021": true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended"
	],
	overrides: [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	plugins: [
		"@typescript-eslint",
		"react"
	],
	rules: {
		"object-curly-spacing": ["warn", "always"],
		"indent": ["error", "tab"],
		"linebreak-style": ["error", "windows"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"no-unused-vars": "warn",
		"react/react-in-jsx-scope": "off",
		"import/extension": "off",
		"@typescript-eslint/ban-ts-comment": "warn",
		"no-underscore-dangle": "off"
	},
	globals: {
		"__IS_DEV__": true
	}
};
