const { Router } = require("express");

const { errorMiddleware, notFoundMiddleware } = require("../middlewares");
const { push } = require("./index.route");

module.exports = () => {
  const r = Router();

  r.use("/", push);
  r.use(notFoundMiddleware);

  r.use(errorMiddleware);

  return r;
};
