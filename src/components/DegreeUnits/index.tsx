import React from "react";
import { Tag } from "@blueprintjs/core";

import { temperatureUnitToSymbol } from "~/util/units";
import { TemperatureUnit } from "~/api/TemperatureUnit";

interface IProps {
  degree: number;
  unit: TemperatureUnit;
}

class DegreeUnits extends React.PureComponent<IProps> {
  public render() {
    const { degree, unit } = this.props;
    return (
      <Tag>
        {Math.trunc(degree)} {temperatureUnitToSymbol(unit)}
      </Tag>
    );
  }
}

export default DegreeUnits;
