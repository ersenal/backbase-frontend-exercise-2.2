export type Status<T, E> =
  | {
      // loading
      value: null;
      isLoading: true;
      error: null;
    }
  | {
      // errored
      value: null;
      isLoading: false;
      error: E;
    }
  | {
      // fetched
      value: T;
      isLoading: false;
      error: null;
    };
