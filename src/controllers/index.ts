import debug from "debug";
import { notifyController, INotifyController } from "./notify.controller";

const d = debug(`${process.env.APP_NAME}:middlewares`);
d(`Loading middlewares`);

export { notifyController, INotifyController };
