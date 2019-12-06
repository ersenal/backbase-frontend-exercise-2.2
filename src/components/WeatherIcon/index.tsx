import React from "react";
import { IWeather } from "~/api/responseTypes";

const URL = "https://openweathermap.org/img/wn";

class WeatherIcon extends React.PureComponent<IWeather> {
  public render() {
    const { icon, description } = this.props;
    return <img src={`${URL}/${icon}@2x.png`} alt={description} />;
  }
}

export default WeatherIcon;
