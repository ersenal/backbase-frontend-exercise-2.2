import React from "react";

import {
  fetchWeatherForecastByCityName,
  TemperatureUnit
} from "./open-weather-map-api/openWeatherMap";

interface IState {
  response?: any;
}

class App extends React.PureComponent<{}, IState> {
  public state: IState = {};

  public async componentDidMount() {
    const response = await fetchWeatherForecastByCityName("london", "uk", TemperatureUnit.Celsius);
    this.setState({ response });
  }

  public render() {
    const { response } = this.state;
    return response ? JSON.stringify(response) : "...";
  }
}

export default App;
