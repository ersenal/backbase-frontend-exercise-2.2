export interface IErrorResponse {
  cod: string;
  message: string;
}

// NOTE(ersenal): See https://openweathermap.org/current#parameter
export interface ICurrentWeatherResponse {
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
  weather: IWeather[];
  base: string;
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
  timezone: number;
  id: number;
  name: string;
  cod: number;
  visibility?: number;
}

// NOTE(ersenal): See https://openweathermap.org/forecast5
export interface IWeatherForecastResponse {
  todo: number;
}

// NOTE(ersenal): See https://openweathermap.org/weather-conditions
export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
