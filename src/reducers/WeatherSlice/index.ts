import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiKey } from "../../constants";
import { WeatherData } from "../../types";

export const weatherApiSlice = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.openweathermap.org/data/2.5" }),
  endpoints: (build) => ({
    getWeatherData: build.query<WeatherData, string>({
      query: (cityName) => `/weather?q=${cityName}&appid=${apiKey}&units=imperial`,
    }),
  }),
});

export const { useGetWeatherDataQuery } = weatherApiSlice;
