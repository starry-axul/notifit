import axios from "axios";

interface PushResponse {
  data: string;
  code: number;
}

export class PushSDK {
  private baseURL: string = "";
  private token: string = "";

  constructor(baseURL: string, token: string) {
    this.baseURL = baseURL;
    this.token = token;
  }

  async push(
    title: string,
    message: string,
    url: string
  ): Promise<PushResponse> {
    const endpoint = `${this.baseURL}/message?k=${
      this.token
    }&t=${encodeURIComponent(title)}&c=${encodeURIComponent(
      message
    )}&u=${encodeURIComponent(url)}`;

    const response: PushResponse = { data: "", code: 500 };

    try {
      const { status } = await axios.get(endpoint);
      response.code = status;
      response.data = "OK";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code) {
          response.code = 400;
        }
        response.data = error.message;
      } else {
        response.data = `${error}`;
      }
    }

    return response;
  }
}
