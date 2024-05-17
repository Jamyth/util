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

cleanup();
build();
