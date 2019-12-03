import fetch from "unfetch";

import OpenWeatherMapApiError from "./OpenWeatherMapApiError";
import { IErrorResponse } from "./responseTypes";

const API_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY =
  process.env.OWM_API_KEY ||
  window.alert("Please set the OWM_API_KEY environment variable and retry!");

export async function request<T>(resource: string): Promise<T> {
  const url = `${API_URL}${resource}&APPID=${API_KEY}`;
  const response = await fetch(url);
  return checkStatus<T>(response);
}

async function checkStatus<T>(response: Response): Promise<T> {
  const json: T = await response.json();

  if (!isError(response, json)) {
    return json;
  }

  const error = new OpenWeatherMapApiError(json.message, json);
  return Promise.reject(error);
}

function isError(response: Response, _: any): _ is IErrorResponse {
  return !response.ok;
}
