import { PushSDK } from "../sdk";
import { pushConfig } from "../config";
import { error } from "../helpers";

export class PushService {
  private pushSDK: PushSDK;

  constructor() {
    this.pushSDK = new PushSDK(pushConfig.baseURL, pushConfig.token);
  }

  public async push(title: string, message: string, url: string) {
    console.log("service");
    const res = await this.pushSDK.push(title, message, url);

    if (res.code >= 300) {
      throw error(res.data, res.code);
    }
  }
}
