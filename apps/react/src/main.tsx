import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
import Navbar from "../components/navbar/navbar";
import "./App.css";
import HomePage from "../components/homepage/index";
import Auth from "../middleware/auth";
Amplify.configure(amplifyconfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Authenticator.Provider>
    <React.StrictMode>
      {/* <Navbar />
      <App /> */}

      <HomePage />
    </React.StrictMode>
  </Authenticator.Provider>
);
