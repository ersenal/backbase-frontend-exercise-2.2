import React from "react";

import "./index.scss";

interface IProps {
  children: React.ReactNode;
}

class CityWeatherCardList extends React.PureComponent<IProps> {
  public render() {
    const { children } = this.props;
    return <div className="city-weather-card-list">{children}</div>;
  }
}

export default CityWeatherCardList;
