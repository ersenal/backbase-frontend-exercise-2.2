import React from "react";

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
          <div className="city-weather-forecast">
            <UnwrapStatus status={weatherForecast}>
              {value => {
                return value.list.map(v => (
                  <HourlyMeasurement key={v.dt} measurement={v} temperatureUnit={temperatureUnit} />
                ));
              }}
            </UnwrapStatus>
          </div>
        )}
      </WeatherForecastContainer>
    );
  }
}

export default CityWeatherForecast;
