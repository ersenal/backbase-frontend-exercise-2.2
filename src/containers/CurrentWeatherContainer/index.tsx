import React from "react";

import { fetchCurrentWeatherByCityName } from "~/api/openWeatherMap";
import { ICurrentWeatherResponse } from "~/api/responseTypes";
import OpenWeatherMapApiError from "~/api/OpenWeatherMapApiError";
import { Status } from "~/api/Status";
import { TemperatureUnit } from "~/api/TemperatureUnit";

interface IProps {
  cityName: string;
  countryCode: string;
  temperatureUnit: TemperatureUnit;
  children: (state: IState) => React.ReactNode;
}

// NOTE(ersenal): Each such component holds its own local weather state.
//                A more scalable solution would be to push these states to a global store
//                (e.g. Redux).
interface IState {
  currentWeather: Status<ICurrentWeatherResponse, OpenWeatherMapApiError>;
}

class CurrentWeatherContainer extends React.PureComponent<IProps, IState> {
  public state: IState = {
    currentWeather: {
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
      this.setState({ currentWeather: { error: null, isLoading: true, value: null } });
      const currentWeather = await fetchCurrentWeatherByCityName(
        cityName,
        countryCode,
        temperatureUnit
      );
      this.setState({ currentWeather: { error: null, isLoading: false, value: currentWeather } });
    } catch (error) {
      this.setState({ currentWeather: { error, isLoading: false, value: null } });
    }
  }
}

export default CurrentWeatherContainer;
