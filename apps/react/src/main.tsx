import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
import "./App.css";
import HomePage from "../components/homepage/index";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page";

import App from "./routes/App";
import Temp from "./routes/temp";
import Details from "./routes/details";
import History from "./routes/history";
import { NONDetails } from "../components/composables/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/temp",
    element: <Temp />,
  },
  {
    path: "/details",
    children: [
      {
        index: true,
        element: <NONDetails />,
      },
      {
        path: "*",
        element: <Details />,
      },
    ],
  },
  {
    path: "/history",
    element: <History />,
  },
]);

Amplify.configure(amplifyconfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <RouterProvider router={router} />
    </Authenticator.Provider>
  </React.StrictMode>
);
