const { HTTP_CODE } = require("../properties");
const { respond } = require("../helpers");
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { Error } from "../interfaces/http.interface";

module.exports = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const code = err.code || HTTP_CODE.INTERNAL_SERVER_ERROR;
  const message = err.message || err.toString();

  return respond(res, { code, message });
};
