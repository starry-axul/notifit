import debug from "debug";

const d = debug(`${process.env.APP_NAME}:middlewares`);
d(`Loading middlewares`);

module.exports = {
  errorMiddleware: require("./error.middleware"),
  notFoundMiddleware: require("./not-found.middleware"),
};
