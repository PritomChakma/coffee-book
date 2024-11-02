import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import MainLayout from "../Layouts/MainLayout";
import Coffee from "../Pages/Coffee";
import CoffeeDetails from "../Pages/CoffeeDetails";
import DashBoard from "../Pages/DashBoard";
import Home from "../Pages/Home";

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
      {
        path: "/coffee/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: () => fetch("../coffees.json"),
      },
    ],
  },
]);

export default routes;
