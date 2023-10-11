import debug from "debug";
import { PushService } from "./push.service";

const d = debug(`${process.env.APP_NAME}:middlewares`);
d(`Loading middlewares`);

export { PushService };
