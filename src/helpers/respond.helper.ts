import debug from "debug";
import { Response } from "express";
import { ResponseData, ResponseOption } from "../interfaces/http.interface";

const d = debug(`${process.env.APP_NAME}:helpers`);
/*
data: Sets the data to be returned
message: overrides data, applied when code >= 400
code: sets the status code
direct: if true, it won't create the response object and instead send what was received in 'data' directly
logging: if false, it won't log to console
meta_extra: everything here will be put in the response.meta property
*/
const respond = (
  res: Response,
  {
    data = null,
    message = "Undefined error",
    code = 200,
    direct = false,
    logging = true,
    meta = false,
    meta_extra = {},
  }: ResponseOption
) => {
  let response: ResponseData = { status: code };

  if (!direct) {
    if (code < 400) {
      response.data = data;

      if (meta && response.data) {
        if (typeof meta !== "boolean" && Object.keys(meta)) {
          response.meta = meta;
        } else {
          response.meta = {
            count: Array.isArray(response.data)
              ? response.data.length
              : response.data
              ? 1
              : 0,
            ...meta_extra,
          };
        }
      }
    } else {
      response.error = message;
    }
  } else {
    if (data != null) {
      response = data;
    }
  }

  if (logging) {
    d(`Responded: ${JSON.stringify(response)}`);
  }

  res.status(code).send(response);
};

module.exports = respond;
