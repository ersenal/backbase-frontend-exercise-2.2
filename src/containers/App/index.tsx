import React from "react";
import { Router } from "@reach/router";

import { TemperatureUnit } from "~/api/openWeatherMap";
import UnitSelector from "~/components/UnitSelector";
import HomePage from "~/components/HomePage";
import ForecastPage from "~/components/ForecastPage";

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
        <Router>
          <HomePage path="/" temperatureUnit={unit} />
          <ForecastPage path="/:countryCode/:cityName" temperatureUnit={unit} />
        </Router>
      </div>
    );
  }

  private handleUnitChange = (unit: TemperatureUnit) => {
    this.setState({ unit });
  };
}

export default App;
