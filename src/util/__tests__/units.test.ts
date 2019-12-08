import { secondsToMilliseconds, mpsToKph, temperatureUnitToSymbol } from "../units";
import { TemperatureUnit } from "~/api/TemperatureUnit";

describe("units util", () => {
  it("should convert seconds to milliseconds", () => {
    const seconds = 1;
    const ms = secondsToMilliseconds(seconds);
    expect(ms).toEqual(1000);
  });

  it("should convert mps to kph", () => {
    const mps = 10;
    const kph = mpsToKph(mps);
    expect(kph).toEqual(36);
  });

  it("should give a symbol given a temperature unit", () => {
    expect(temperatureUnitToSymbol(TemperatureUnit.Celsius)).toEqual("°C");
    expect(temperatureUnitToSymbol(TemperatureUnit.Fahrenheit)).toEqual("°F");
    expect(temperatureUnitToSymbol(TemperatureUnit.Kelvin)).toEqual("K");
  });
});
