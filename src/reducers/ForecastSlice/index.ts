import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiKey, baseUrl } from "../../constants";
import { ForecastData } from "../../types";

export const forecastApiSlice = createApi({
  reducerPath: "forecastApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    getForecastData: build.query<ForecastData, string>({
      query: (cityName) => `/forecast?q=${cityName}&cnt=9&appid=${apiKey}&units=imperial`,
    }),
  }),
});

export const { useGetForecastDataQuery } = forecastApiSlice;
