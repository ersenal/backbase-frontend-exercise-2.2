import { TemperatureUnit } from "~/api/openWeatherMap";

export function secondsToMilliseconds(seconds: number) {
  return seconds * 1000;
}

export function mpsToKph(mps: number) {
  return mps * 3.6;
}

export default function temperatureUnitToSymbol(unit: TemperatureUnit) {
  switch (unit) {
    case TemperatureUnit.Celsius:
      return "°C";
    case TemperatureUnit.Fahrenheit:
      return "°F";
    case TemperatureUnit.Kelvin:
      return "K";
  }
}
