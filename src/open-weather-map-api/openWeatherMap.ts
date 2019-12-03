import { request } from "./apiUtil";
import { ICurrentWeatherResponse, IWeatherForecastResponse } from "./responseTypes";

export enum TemperatureUnit {
  Fahrenheit = "imperial",
  Celsius = "metric",
  Kelvin = ""
}

export async function fetchCurrentWeatherByCityName(
  cityName: string,
  countryCode?: string,
  unit: TemperatureUnit = TemperatureUnit.Kelvin
): Promise<ICurrentWeatherResponse> {
  const path = `/weather?${withCityName(cityName, countryCode)}${unit ? `&${withUnit(unit)}` : ""}`;
  return request(path);
}

export async function fetchWeatherForecastByCityName(
  cityName: string,
  countryCode?: string,
  unit: TemperatureUnit = TemperatureUnit.Kelvin
): Promise<IWeatherForecastResponse> {
  const path = `/forecast?${withCityName(cityName, countryCode)}${
    unit ? `&${withUnit(unit)}` : ""
  }`;
  return request(path);
}

function withCityName(cityName: string, countryCode?: string) {
  return `q=${cityName}${countryCode ? `,${countryCode}` : ""}`;
}

function withUnit(unit: TemperatureUnit) {
  return `units=${unit}`;
}
