import { join } from "node:path";
import { existsSync, statSync, rmSync } from "node:fs";
import { spawn } from "./spawn.js";
import { createConsoleLogger } from "@iamyth/logger";

import "./format.js";
import "./lint.js";

const FilePath = {
    workspaceTsConfig: join(import.meta.dirname, "../tsconfig.json"),
    sourceGlob: join(import.meta.dirname, "../src/**/*.ts"),
    distDir: join(import.meta.dirname, "../dist"),
    cjsDir: join(import.meta.dirname, "../dist/cjs"),
    esmDir: join(import.meta.dirname, "../dist/esm"),
};
const logger = createConsoleLogger("Builder");

function cleanup() {
    logger.task("Cleaning up old builds...");
    if (existsSync(FilePath.distDir) && statSync(FilePath.distDir).isDirectory()) {
        rmSync(FilePath.distDir, { recursive: true });
    }
}

function buildCJS() {
    logger.task("Building for CJS");
    spawn("esbuild", [FilePath.sourceGlob, `--outdir=${FilePath.cjsDir}`, "--format=cjs"], "");
}

function buildESM() {
    logger.task("Building for ESM");
    spawn("esbuild", [FilePath.sourceGlob, `--outdir=${FilePath.esmDir}`, "--format=esm"], "");
}

function buildType() {
    logger.task("Building Type Definitions");
    spawn("tsc", ["--build", FilePath.workspaceTsConfig], "Build Type Failed");
}

cleanup();
buildCJS();
buildESM();
buildType();
