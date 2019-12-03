import React from "react";

import { fetchCurrentWeatherByCityName } from "./open-weather-map/openWeatherMap";

interface IState {
  response?: any;
}

class App extends React.PureComponent<{}, IState> {
  public state: IState = {};

  public async componentDidMount() {
    const response = await fetchCurrentWeatherByCityName("london", "uk");
    this.setState({ response });
  }

  public render() {
    const { response } = this.state;
    return response ? JSON.stringify(response) : "...";
  }
}

export default App;
