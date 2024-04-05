import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiKey } from "../../constants";
import { ForecastData } from "../../types";

const baseUrl = "https://api.openweathermap.org/data/2.5"

// Get Coordinates from a City Name
const getCityCoordinates = async (cityName: string) => {
  const response = await fetch(`${baseUrl}/weather?q=${cityName}&appid=${apiKey}`);
  const data = await response.json();
  const { coord } = data;
  return coord;
};

export const forecastApiSlice = createApi({
  reducerPath: "forecastApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    getForecastData: build.query<ForecastData, string>({
      queryFn: async (cityName: string) => {
        const coordinates = await getCityCoordinates(cityName);
        const response = await fetch(
          `${baseUrl}/forecast/daily?lat=${coordinates.lat}&lon=${coordinates.lon}&cnt=9&appid=${apiKey}&units=imperial`
        );
        return response.json();
      },
    }),
  }),
});

export const { useGetForecastDataQuery } = forecastApiSlice;
