import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiKey, baseUrl } from "../../constants";
import { WeatherData } from "../../types";

export const weatherApiSlice = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    getWeatherData: build.query<WeatherData, string>({
      query: (cityName) => `/weather?q=${cityName}&appid=${apiKey}&units=imperial`,
    }),
  }),
});

export const { useGetWeatherDataQuery } = weatherApiSlice;
