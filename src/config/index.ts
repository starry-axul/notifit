import debug from "debug"
const d = debug(`${process.env.APP_NAME}:config`);
d(`Loading config`);

module.exports = {
    //swagger:  require('./swagger.config.js'),
    //database: require('./database.config.js'),
    //aws:      require('./aws.config'),
};