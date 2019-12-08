import React from "react";
import { RouteComponentProps } from "@reach/router";

import CityWeatherForecast from "../CityWeatherForecast";
import { TemperatureUnit } from "~/api/TemperatureUnit";

type RouteProps = RouteComponentProps<{ cityName: string; countryCode: string }>;
type Props = RouteProps & {
  temperatureUnit: TemperatureUnit;
};

class ForecastPage extends React.PureComponent<Props> {
  public render() {
    const { cityName, countryCode, temperatureUnit } = this.props;
    return (
      <CityWeatherForecast
        temperatureUnit={temperatureUnit}
        cityName={cityName!}
        countryCode={countryCode!}
      />
    );
  }
}

export default ForecastPage;
