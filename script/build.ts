import { spawn } from "./spawn";
import { createConsoleLogger } from "@iamyth/logger";
import path from "path";
import fs from "fs-extra";

const logger = createConsoleLogger("TypeScript Compiler");

require("./format");
require("./lint");

function cleanup() {
    logger.task("Cleanup Old Builds");
    if (fs.statSync(path.join(__dirname, "../dist")).isDirectory()) {
        fs.rmSync(path.join(__dirname, "../dist"), { recursive: true });
    }
}

function build() {
    logger.task("Build and Transpile");
    spawn("tsc", ["--build", path.join(__dirname, "../tsconfig.json")], "Build Failed.");
}

function copyCJStoLib() {
    logger.task("Copying dist files to lib");
    const dist = path.join(__dirname, "../dist");
    fs.copySync(path.join(dist, "./cjs"), path.join(dist, "./lib"), { recursive: true });
}

function copyPackageJSON() {
    logger.task("Copying other asset to dist");
    fs.copyFileSync(path.join(__dirname, "../package.json"), path.join(__dirname, "../dist/package.json"));
    fs.copyFileSync(path.join(__dirname, "../LICENSE"), path.join(__dirname, "../dist/LICENSE"));
}

cleanup();
build();
copyCJStoLib();
copyPackageJSON();
