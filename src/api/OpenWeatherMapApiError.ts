import { IErrorResponse } from "./responseTypes";

export default class OpenWeatherMapApiError extends Error {
  constructor(message: string, public response: IErrorResponse) {
    super(message);
    this.response = response;
  }
}
