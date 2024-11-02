import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Coffee from "../Pages/Coffee";
import DashBoard from "../Pages/DashBoard";
import Home from "../Pages/Home";
import CoffeeCard from "../components/CoffeeCard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <CoffeeCard></CoffeeCard>,
            loader: () => fetch("../coffees.json"),
          },
          {
            path: "/category/:category",
            element: <CoffeeCard></CoffeeCard>,
            loader: () => fetch("../coffees.json"),
          },
        ],
      },
      {
        path: "/coffee",
        element: <Coffee></Coffee>,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
    ],
  },
]);

export default routes;
