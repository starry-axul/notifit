import express, { Express, Request, Response } from "express";
import { PushService } from "../services";
const { respond } = require("../helpers");
const { error } = require("../helpers");
//import { respond } from "../helpers";

//let _assetService = null;

interface IPushBody {
  title: string;
  message: string;
  url: string;
}
interface IPushReq extends Request {
  body: IPushBody;
}

export interface INotifyController {
  push(req: Request, res: Response): void;
}

class NotifyController {
  private _pushService: PushService;

  constructor() {
    this._pushService = new PushService();
  }

  async push(req: IPushReq, res: Response) {
    console.log("entra");

    const reqPush = req.body;
    await this._pushService.push(reqPush.title, reqPush.message, reqPush.url);
    //const data   = await _assetService.get(id);

    return respond(res, { code: 200, data: "OK" });
  }

  /*
  async getAll(req, res) {
    const { limit, page } = req.query;
    const data = await _assetService.getAll(limit, page);
    return respond(res, { data });
  }

  async getByName(req, res) {
    const { name } = req.params;
    const data = await _assetService.getByName(name);
    return respond(res, { data });
  }

  async delete(req, res) {
    const { id } = req.params;
    const data = await _assetService.delete(id);

    return respond(res, { data });
  }

  async restore(req, res) {
    const { id } = req.params;
    const data = await _assetService.restore(id);

    return respond(res, { data });
  }

  async viewFile(req, res) {
    const { path } = req;
    const data = await _assetService.getFileByPath(path);
    const callback = await _assetService.getServerFileByPath(data);

    callback(res);
  }

  async getBase64(req, res, next) {
    const { id } = req.params;
    try {
      const data = await _assetService.getBase64(id);
      return respond(res, { data });
    } catch (e) {
      next(e);
    }
  }*/
}

export const notifyController: INotifyController = new NotifyController();
