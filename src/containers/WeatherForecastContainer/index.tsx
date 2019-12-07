import React from "react";

import { TemperatureUnit, fetchWeatherForecastByCityName } from "~/api/openWeatherMap";
import { IWeatherForecastResponse } from "~/api/responseTypes";
import OpenWeatherMapApiError from "~/api/OpenWeatherMapApiError";
import { Status } from "~/api/Status";

interface IProps {
  cityName: string;
  countryCode: string;
  temperatureUnit: TemperatureUnit;
  children: (state: IState) => React.ReactNode;
}

interface IState {
  weatherForecast: Status<IWeatherForecastResponse, OpenWeatherMapApiError>;
}

class WeatherForecastContainer extends React.PureComponent<IProps, IState> {
  public state: IState = {
    weatherForecast: {
      error: null,
      isLoading: true,
      value: null
    }
  };

  public async componentDidMount() {
    this.hitApi();
  }

  public async componentDidUpdate(prevProps: IProps) {
    if (prevProps.temperatureUnit !== this.props.temperatureUnit) {
      this.hitApi();
    }
  }

  public render() {
    const { children } = this.props;
    return children(this.state);
  }

  private async hitApi() {
    const { cityName, countryCode, temperatureUnit } = this.props;

    try {
      this.setState({ weatherForecast: { error: null, isLoading: true, value: null } });
      const weatherForecast = await fetchWeatherForecastByCityName(
        cityName,
        countryCode,
        temperatureUnit
      );
      this.setState({ weatherForecast: { error: null, isLoading: false, value: weatherForecast } });
    } catch (error) {
      this.setState({ weatherForecast: { error, isLoading: false, value: null } });
    }
  }
}

export default WeatherForecastContainer;
