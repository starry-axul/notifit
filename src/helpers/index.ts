import debug from "debug";
import { error } from "./error.helper";
import { logger } from "./logger.helper";
import { respond } from "./respond.helper";

const d = debug(`${process.env.APP_NAME}:helpers`);
d(`Loading helpers`);

export { logger, respond, error };
