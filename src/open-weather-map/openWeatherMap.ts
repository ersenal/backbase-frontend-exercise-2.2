import { request } from "./apiUtil";
import { ICurrentWeatherResponse } from "./responseTypes";

export enum TemperatureUnit {
  Fahrenheit = "imperial",
  Calsius = "metric",
  Kelvin = ""
}

export async function fetchCurrentWeatherByCityName(
  cityName: string,
  countryCode?: string,
  unit: TemperatureUnit = TemperatureUnit.Kelvin
): Promise<ICurrentWeatherResponse> {
  const path = `/weather?q=${cityName}${countryCode ? `,${countryCode}` : ""}`;
  return request(unit ? withUnit(path, unit) : path);
}

function withUnit(path: string, unit: TemperatureUnit) {
  return `${path}&units=${unit}`;
}
