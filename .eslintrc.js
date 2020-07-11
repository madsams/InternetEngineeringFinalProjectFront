module.exports = {
    parser: "babel-eslint",
    plugins: [
        "react",
        "react-hooks"
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    env: {
        browser: true,
        node: true,
        es6: true
    },
    rules: {
        "no-restricted-imports": [
            "error",
            {
                "patterns": ["@material-ui/*/*/*", "!@material-ui/core/test-utils/*"]
            }
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            rules: {
                'no-undef': 'off',
                'no-unused-vars': 'off'
            },
            parserOptions: {
                sourceType: "module"
            }
        }
    ]
};
