export interface IErrorResponse {
  cod: string;
  message: string;
}

// NOTE(ersenal): See https://openweathermap.org/current#parameter
export interface ICurrentWeatherResponse extends IMeasurement {
  coord: {
    lon: number;
    lat: number;
  };
  sys: {
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  base: string;
  visibility?: number;
}

// NOTE(ersenal): See https://openweathermap.org/forecast5
export interface IWeatherForecastResponse {
  city: {
    id: string;
    name: string;
    coord: {
      lon: number;
      lat: number;
    };
    country: string;
  };
  cnt: number;
  list: IMeasurement[];
}

export interface IMeasurement {
  weather: IWeather[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level?: number;
    grnd_level?: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  rain?: Partial<{
    "1h": number;
    "3h": number;
  }>;
  snow?: Partial<{
    "1h": number;
    "3h": number;
  }>;
  dt: number;
}

// NOTE(ersenal): See https://openweathermap.org/weather-conditions
export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
