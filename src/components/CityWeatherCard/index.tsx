import React from "react";
import { Card, Elevation, H5 } from "@blueprintjs/core";
import { navigate } from "@reach/router";

import { TemperatureUnit } from "~/api/openWeatherMap";
import CurrentWeatherContainer from "~/containers/CurrentWeatherContainer";
import DegreeUnits from "../DegreeUnits";
import WindIndicator from "../WindIndicator";
import WeatherIcon from "../WeatherIcon";
import UnwrapStatus from "../UnwrapStatus";

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
          <Card
            interactive={true}
            onClick={this.handleClickCard}
            elevation={Elevation.TWO}
            className="city-weather-card"
          >
            <UnwrapStatus status={currentWeather}>
              {value => (
                <>
                  <div className="top">
                    <H5>{value.name}</H5>
                    <DegreeUnits unit={temperatureUnit} degree={value.main.temp} />
                  </div>
                  <div className="body">
                    <WindIndicator
                      speed={value.wind.speed}
                      degrees={value.wind.deg}
                      isMetric={temperatureUnit !== TemperatureUnit.Fahrenheit}
                    />
                    {value.weather.length && (
                      <>
                        <WeatherIcon weather={value.weather[0]} large={true} />
                        {value.weather[0].description}
                      </>
                    )}
                  </div>
                </>
              )}
            </UnwrapStatus>
          </Card>
        )}
      </CurrentWeatherContainer>
    );
  }

  private handleClickCard = () => {
    const { cityName, countryCode } = this.props;
    navigate(`${countryCode}/${cityName}`);
  };
}

export default CityWeatherCard;
