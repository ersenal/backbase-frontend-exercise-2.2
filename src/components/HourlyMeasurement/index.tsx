import React from "react";
import { Card } from "@blueprintjs/core";

import { IMeasurement } from "~/api/responseTypes";
import { secondsToMilliseconds } from "~/util/units";
import DegreeUnits from "../DegreeUnits";
import WeatherIcon from "../WeatherIcon";
import WindIndicator from "../WindIndicator";
import { dateParts } from "~/util/date";
import { TemperatureUnit } from "~/api/TemperatureUnit";

import "./index.scss";

interface IProps {
  measurement: IMeasurement;
  temperatureUnit: TemperatureUnit;
}

// NOTE(ersenal): Lift this up from ./index.scss as the width of the chart relies on it
export const WIDTH_PX = 120;

class HourlyMeasurement extends React.PureComponent<IProps> {
  public render() {
    const {
      measurement: { weather, main, wind, dt },
      temperatureUnit
    } = this.props;

    const measurementDate = new Date(secondsToMilliseconds(dt));
    const measurementParts = dateParts(measurementDate);

    return (
      <Card className="hourly-measurement" style={{ width: `${WIDTH_PX}px` }}>
        <div>
          <span className="hour">{measurementParts.hour}</span>
          <span className="minute">{measurementParts.minute}</span>
          {/* NOTE(ersenal): We assume here the following hour granularity, provided by the API */}
          {measurementParts.hour === "00" && (
            <span className="weekday">{measurementParts.weekDay}</span>
          )}
        </div>
        {weather.length && <WeatherIcon weather={weather[0]} />}
        <DegreeUnits degree={main.temp} unit={temperatureUnit} />
        <WindIndicator
          degrees={wind.deg}
          speed={wind.speed}
          isMetric={temperatureUnit !== TemperatureUnit.Fahrenheit}
        />
      </Card>
    );
  }
}

export default HourlyMeasurement;
