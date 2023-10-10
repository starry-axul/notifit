const { HTTP_CODE } = require("../properties");
const { respond } = require("../helpers");
import { Request, Response, NextFunction } from "express";

module.exports = (req: Request, res: Response, next: NextFunction) =>
  respond(res, {
    code: HTTP_CODE.NOT_FOUND,
    message: "Endpoint doesn't exist",
  });
