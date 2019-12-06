import React from "react";

import { TemperatureUnit } from "~/api/openWeatherMap";
import UnitSelector from "~/components/UnitSelector";
import CityWeatherCardList from "~/components/CityWeatherCardList";
import CityWeatherCard from "~/components/CityWeatherCard";

import "./index.scss";

interface IState {
  unit: TemperatureUnit;
}

class App extends React.PureComponent<{}, IState> {
  public state: IState = {
    unit: TemperatureUnit.Celsius
  };

  public render() {
    const { unit } = this.state;

    return (
      <div className="app">
        <UnitSelector value={unit} onChange={this.handleUnitChange} />
        <CityWeatherCardList>
          <CityWeatherCard cityName="london" countryCode="uk" temperatureUnit={unit} />
          <CityWeatherCard cityName="cardiff" countryCode="uk" temperatureUnit={unit} />
          <CityWeatherCard cityName="edinburgh" countryCode="uk" temperatureUnit={unit} />
          <CityWeatherCard cityName="manchester" countryCode="uk" temperatureUnit={unit} />
          <CityWeatherCard cityName="dublin" countryCode="ie" temperatureUnit={unit} />
        </CityWeatherCardList>
      </div>
    );
  }

  private handleUnitChange = (unit: TemperatureUnit) => {
    this.setState({ unit });
  };
}

export default App;
