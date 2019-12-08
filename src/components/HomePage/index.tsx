import React from "react";
import { RouteComponentProps } from "@reach/router";

import CityWeatherCardList from "../CityWeatherCardList";
import CityWeatherCard from "../CityWeatherCard";
import { TemperatureUnit } from "~/api/TemperatureUnit";

interface IProps {
  temperatureUnit: TemperatureUnit;
}

class HomePage extends React.PureComponent<IProps & RouteComponentProps> {
  public render() {
    const { temperatureUnit } = this.props;
    return (
      <CityWeatherCardList>
        <CityWeatherCard cityName="london" countryCode="uk" temperatureUnit={temperatureUnit} />
        <CityWeatherCard cityName="cardiff" countryCode="uk" temperatureUnit={temperatureUnit} />
        <CityWeatherCard cityName="edinburgh" countryCode="uk" temperatureUnit={temperatureUnit} />
        <CityWeatherCard cityName="manchester" countryCode="uk" temperatureUnit={temperatureUnit} />
        <CityWeatherCard cityName="dublin" countryCode="ie" temperatureUnit={temperatureUnit} />
      </CityWeatherCardList>
    );
  }
}

export default HomePage;
