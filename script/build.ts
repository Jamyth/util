import { spawn } from "./spawn";
import { createConsoleLogger } from "@iamyth/logger";
import path from "path";
import fs from "fs-extra";

const logger = createConsoleLogger("TypeScript Compiler");

require("./format");
require("./lint");

function cleanup() {
    logger.task("Cleanup Old Builds");
    if (fs.existsSync(path.join(__dirname, "../dist")) && fs.statSync(path.join(__dirname, "../dist")).isDirectory()) {
        fs.rmSync(path.join(__dirname, "../dist"), { recursive: true });
    }
}

function build() {
    logger.task("Build and Transpile");
    spawn("tsc", ["--build", path.join(__dirname, "../tsconfig.json")], "Build Failed.");
}

function copyPackageJSON() {
    logger.task("Copying other asset to dist");
    fs.copyFileSync(path.join(__dirname, "../package.json"), path.join(__dirname, "../dist/package.json"));
    fs.copyFileSync(path.join(__dirname, "../LICENSE"), path.join(__dirname, "../dist/LICENSE"));
}

function copyDTS() {
    logger.task("Copying d.ts to dist/");
    fs.copyFileSync(path.join(__dirname, "./template/react.d.ts"), path.join(__dirname, "../dist/react.d.ts"));
    fs.copyFileSync(path.join(__dirname, "./template/core.d.ts"), path.join(__dirname, "../dist/core.d.ts"));
    fs.copyFileSync(path.join(__dirname, "./template/browser.d.ts"), path.join(__dirname, "../dist/browser.d.ts"));
}

cleanup();
build();
copyDTS();
copyPackageJSON();
