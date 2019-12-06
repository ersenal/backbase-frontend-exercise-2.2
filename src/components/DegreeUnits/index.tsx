import React from "react";
import { Tag } from "@blueprintjs/core";

import { TemperatureUnit } from "~/api/openWeatherMap";

interface IProps {
  degree: number;
  unit: TemperatureUnit;
}

class DegreeUnits extends React.PureComponent<IProps> {
  private static temperatureUnitToSymbol = (unit: TemperatureUnit) => {
    switch (unit) {
      case TemperatureUnit.Celsius:
        return "°C";
      case TemperatureUnit.Fahrenheit:
        return "°F";
      case TemperatureUnit.Kelvin:
        return "K";
    }
  };

  public render() {
    const { degree, unit } = this.props;
    return (
      <Tag>
        {Math.trunc(degree)} {DegreeUnits.temperatureUnitToSymbol(unit)}
      </Tag>
    );
  }
}

export default DegreeUnits;
