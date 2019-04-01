module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["import", "@typescript-eslint"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        sourceType: "module",
        useJSXTextNode: true,
        project: "./tsconfig.json"
    },
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "import/extensions": [1, "never", { ts: "never" }]
    },
    overrides: [
        {
            files: ["**/*.ts", "**/*.tsx"],
            rules: {
                "no-unused-vars": ["off"]
            }
        }
    ],
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            },
            "eslint-import-resolver-typescript": true
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        react: {
            version: "detect"
        }
    },
    env: {
        jest: true,
        browser: true
    }
};
