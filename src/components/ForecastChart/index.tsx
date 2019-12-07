import React from "react";
import { Line } from "@nivo/line";

import { WIDTH_PX } from "../HourlyMeasurement";
import { TemperatureUnit } from "~/api/openWeatherMap";

interface IProps {
  data: Array<{ x: Date; y: number }>;
  temperatureUnit: TemperatureUnit;
}

class ForecastChart extends React.PureComponent<IProps> {
  public render() {
    const { data } = this.props;
    const chartData = [{ id: "weather", data: this.props.data }];

    // NOTE(ersenal): We want the data point to line up with its corresponding measurement
    const width = WIDTH_PX * data.length;

    return (
      <Line
        layers={["lines"]}
        width={width}
        height={250}
        lineWidth={2}
        margin={{ left: 50, top: 20, right: 50 }}
        yScale={{
          type: "linear",
          min: "auto"
        }}
        xScale={{
          type: "time",
          format: "native"
        }}
        curve="monotoneX"
        data={chartData}
        enablePoints={false}
        animate={false}
      />
    );
  }
}

export default ForecastChart;
