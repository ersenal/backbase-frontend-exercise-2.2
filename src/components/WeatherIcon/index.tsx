import React from "react";

import { IWeather } from "~/api/responseTypes";

const URL = "https://openweathermap.org/img/wn";

interface IProps {
  large?: boolean;
  weather: IWeather;
}

class WeatherIcon extends React.PureComponent<IProps> {
  public render() {
    const {
      weather: { icon, description },
      large
    } = this.props;

    return <img src={`${URL}/${icon}${large ? "@2x" : ""}.png`} alt={description} />;
  }
}

export default WeatherIcon;
