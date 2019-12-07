import React from "react";
import { Spinner, NonIdealState } from "@blueprintjs/core";

import { Status } from "~/api/Status";
import OpenWeatherMapApiError from "~/api/OpenWeatherMapApiError";

interface IProps<T> {
  status: Status<T, OpenWeatherMapApiError>;
  children: (state: T) => React.ReactNode;
}

class UnwrapStatus<T> extends React.PureComponent<IProps<T>> {
  public render() {
    const { status, children } = this.props;
    return status.isLoading ? (
      <Spinner />
    ) : status.error ? (
      <NonIdealState title="Error" icon="error" description={status.error.message} />
    ) : (
      children(status.value)
    );
  }
}

export default UnwrapStatus;
