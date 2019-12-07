import React from "react";
import { H3 } from "@blueprintjs/core";
import { Link } from "@reach/router";

import WeatherForecastContainer from "~/containers/WeatherForecastContainer";
import { TemperatureUnit } from "~/api/openWeatherMap";
import UnwrapStatus from "../UnwrapStatus";
import HourlyMeasurement from "../HourlyMeasurement";

import "./index.scss";

interface IProps {
  cityName: string;
  countryCode: string;
  temperatureUnit: TemperatureUnit;
}

class CityWeatherForecast extends React.PureComponent<IProps> {
  public render() {
    const { cityName, countryCode, temperatureUnit } = this.props;
    return (
      <WeatherForecastContainer
        cityName={cityName}
        countryCode={countryCode}
        temperatureUnit={temperatureUnit}
      >
        {({ weatherForecast }) => (
          <UnwrapStatus status={weatherForecast}>
            {value => {
              const measurements = value.list.map(v => (
                <HourlyMeasurement key={v.dt} measurement={v} temperatureUnit={temperatureUnit} />
              ));

              return (
                <div className="city-weather-forecast">
                  <H3>
                    {value.city.name} ({value.city.country}){" "}
                    <small>
                      <Link to="/">See all</Link>
                    </small>
                  </H3>
                  <div className="measurements">{measurements}</div>
                </div>
              );
            }}
          </UnwrapStatus>
        )}
      </WeatherForecastContainer>
    );
  }
}

export default CityWeatherForecast;
