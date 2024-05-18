import { spawn } from "./spawn.js";
import { createConsoleLogger } from "@iamyth/logger";

const logger = createConsoleLogger("Prettier");

logger.task("Formatting codes");
spawn("prettier", ["--write", "./src"], "Cannot Format");
