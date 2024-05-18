/** @type {import('eslint').Linter.Config} */
const config = {
    ignorePatterns: ["**/node_modules/**", "**/dist/**"],
    extends: ["iamyth/preset/node"],
    root: true,
    overrides: [
        {
            files: ["test/**/*.ts", "test/**/*.tsx"],
            rules: {
                "sonarjs/no-duplicate-string": "off",
                "@typescript-eslint/prefer-enum-initializers": "off",
                "@typescript-eslint/ban-ts-comment": "off",
            },
        },
    ],
};

module.exports = config;
