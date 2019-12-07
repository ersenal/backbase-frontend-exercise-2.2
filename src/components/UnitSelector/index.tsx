import React from "react";
import { HTMLSelect, FormGroup } from "@blueprintjs/core";

import { TemperatureUnit } from "~/api/openWeatherMap";

interface IProps {
  value: TemperatureUnit;
  onChange: (unit: TemperatureUnit) => void;
}

class UnitSelector extends React.PureComponent<IProps> {
  public render() {
    const { value } = this.props;
    const options = Object.entries(TemperatureUnit).map(([k, v]) => ({ label: k, value: v }));

    return (
      <FormGroup label="Temperature Unit" inline={true}>
        <HTMLSelect options={options} value={value} onChange={this.handleChange} />
      </FormGroup>
    );
  }

  private handleChange = (ev: React.FocusEvent<HTMLSelectElement>) => {
    const { onChange } = this.props;
    onChange(ev.currentTarget.value as TemperatureUnit);
  };
}

export default UnitSelector;
