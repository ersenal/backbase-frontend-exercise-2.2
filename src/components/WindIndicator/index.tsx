import React from "react";
import { Icon } from "@blueprintjs/core";

import "./index.scss";

interface IProps {
  degrees: number;
  speed: number;
  isMetric: boolean;
}

class WindIndicator extends React.PureComponent<IProps> {
  private static mpsToKph(mps: number) {
    return mps * 3.6;
  }

  public render() {
    const { degrees, speed, isMetric } = this.props;
    return (
      <div className="wind-indicator">
        <Icon icon="arrow-down" style={{ transform: `rotate(${degrees}deg)` }} />
        <span className="speed">
          {isMetric
            ? `${Math.trunc(WindIndicator.mpsToKph(speed))}km/h`
            : `${Math.trunc(speed)}mph`}
        </span>
      </div>
    );
  }
}

export default WindIndicator;
