import React from "react";
import { Card, Elevation, Spinner, H5, Callout } from "@blueprintjs/core";

import { TemperatureUnit } from "~/api/openWeatherMap";
import CurrentWeatherContainer from "~/containers/CurrentWeatherContainer";
import DegreeUnits from "../DegreeUnits";
import WindIndicator from "../WindIndicator";
import WeatherIcon from "../WeatherIcon";

import "./index.scss";

interface IProps {
  cityName: string;
  countryCode: string;
  temperatureUnit: TemperatureUnit;
}

class CityWeatherCard extends React.PureComponent<IProps> {
  public render() {
    const { cityName, countryCode, temperatureUnit } = this.props;
    return (
      <CurrentWeatherContainer
        cityName={cityName}
        countryCode={countryCode}
        temperatureUnit={temperatureUnit}
      >
        {({ currentWeather }) => (
          <Card interactive={true} elevation={Elevation.TWO} className="city-weather-card">
            {currentWeather.isLoading ? (
              <Spinner />
            ) : currentWeather.error ? (
              <Callout title="Error">{currentWeather.error.message}</Callout>
            ) : (
              <>
                <div className="top">
                  <H5>{currentWeather.value.name}</H5>
                  <DegreeUnits unit={temperatureUnit} degree={currentWeather.value.main.temp} />
                </div>
                <div className="body">
                  <WindIndicator
                    speed={currentWeather.value.wind.speed}
                    degrees={currentWeather.value.wind.deg}
                    isMetric={temperatureUnit !== TemperatureUnit.Fahrenheit}
                  />
                  {currentWeather.value.weather.length && (
                    <>
                      <WeatherIcon {...currentWeather.value.weather[0]} />
                      {currentWeather.value.weather[0].description}
                    </>
                  )}
                </div>
              </>
            )}
          </Card>
        )}
      </CurrentWeatherContainer>
    );
  }
}

export default CityWeatherCard;
