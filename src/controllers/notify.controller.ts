import express, { Express, Request, Response } from "express";
import { PushService, IPushService } from "../services/push.service";
const { respond } = require("../helpers");

//import { respond } from "../helpers";

//let _assetService = null;

export interface INotifyController {
  push(req: Request, res: Response): void;
}

class NotifyController {
  private _pushService: PushService;

  constructor() {
    this._pushService = new PushService();
  }

  async push(req: Request, res: Response) {
    console.log("entra");
    await this._pushService.push();
    //const { id } = req;
    //const data   = await _assetService.get(id);

    return respond(res, {});
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
