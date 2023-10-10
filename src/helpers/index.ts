import debug from "debug";

const d = debug(`${process.env.APP_NAME}:helpers`);
d(`Loading helpers`);

module.exports = {
  logger: require("./logger.helper"),
  respond: require("./respond.helper"),
  //error:   require('./error.helper'),
};
