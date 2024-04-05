export interface WeatherData {
  temp?: any;
  base: string;
  clouds: {
    all: number
  };
  cod: number;
  coord: {
    lon: number;
    lat: number
  };
  dt: number;
  id: number;
  dt_txt?: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  },
  timezone: number;
  visibility: number;
  weather: [{
    id: number;
    main: string;
    description: string;
    icon: string;
  }];
  wind: {
    speed: number;
    deg: number;
  };
}


export interface IconMap {
  [key: number]: string;
}

export interface ForecastData {
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
  };
  cod: number;
  message: number;
  cnt: number;

  lat: number;
  lon: number;
  id: number;
  name: string;
  base: string;
  visibility: number;
  timezone: number;
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone_offset: number;
  list: WeatherData[];
}