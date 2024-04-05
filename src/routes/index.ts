import { lazy } from "react";

import Home from "../pages/Home";
import Forecast from "../pages/Forecast";
const NotFound = lazy(() => import("../pages/NotFound"));

export const routes = [
  {
    path: "/",
    component: Home,
    requiresAuth: false,
  },
  {
    path: "/forecast",
    component: Forecast,
    requiresAuth: false,
  },
  {
    path: "*",
    component: NotFound,
    requiresAuth: false,
  },
];
