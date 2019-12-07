import React from "react";
import { RouteComponentProps } from "@reach/router";

import { TemperatureUnit } from "~/api/openWeatherMap";
import CityWeatherForecast from "../CityWeatherForecast";

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
