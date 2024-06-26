// @ts-check

/** @type {import("@jest/types").Config.InitialOptionsWithRootDir} */
const config = {
    // Stop running tests after `n` failures
    bail: 1,

    // A preset that is used as a base for Jest's configuration
    preset: "ts-jest",

    // The root directory that Jest should scan for tests and modules within
    rootDir: "./",

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ["/node_modules/", "<rootDir>/build/"],

    // A map from regular expressions to paths to transformers
    transform: {
        [String.raw`\.(ts|tsx)$`]: [
            "ts-jest",
            {
                tsconfig: "<rootDir>/test/tsconfig.json",
            },
        ],
    },

    // Indicates whether each individual test should be reported during the run
    verbose: true,

    // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
    watchPathIgnorePatterns: ["<rootDir>/build/"],
};

module.exports = config;
