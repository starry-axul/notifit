import debug from "debug";
import { pushConfig } from "./sdk.config";

const d = debug(`${process.env.APP_NAME}:config`);
d(`Loading config`);

export { pushConfig };
