import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import debug from "debug";
require("express-async-errors");
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

const d = debug(`${process.env.APP_NAME}:main`);
d(`Booting up...`);

dotenv.config();
const app: Express = express();

require('./config/env.config');
const { logger } = require("./helpers");
//require("./config/database.config.js");
morgan.format(
  "default_format",
  `":method :url" :status :res[content-length] - :response-time ms`
);

// Open cors
app.use(cors());
app.options("*", cors());
app.disable("x-powered-by");

app.use(morgan("default_format", { stream: logger.stream }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server + Test 5");
});

//app.use(require("./routes")(express));

app.listen(process.env.APP_PORT, () => {
  logger.info(`Levantado en puerto ${process.env.APP_PORT}`);
  //console.log("up");
  d(`${process.env.APP_NAME} up!`);
});

//module.exports = app;
