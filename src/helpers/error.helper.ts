import { Error } from "../interfaces/http.interface";

export const error = (message = "An error has occurred", code = 500): Error => {
  return { code, message };
};
