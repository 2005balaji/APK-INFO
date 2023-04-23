import React from "react";
import Navbar from "../src/components/Navbar/navbar";
import Uploadbox from "../src/components/Uploadbox/Uploadbox";
import { Auth0Provider } from "@auth0/auth0-react";
import Details from "./components/details/details";
import History from "./components/history/history";
import Guides from "./components/guides/guides";
import Bodytext from "../src/components/bodytext/bodytext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Historydetails from "./components/historydetails/historydetails";
import { useAuth0 } from "@auth0/auth0-react";
import Options from "./components/options/options";

function App() {
  const [apkinfo, setApkinfo] = useState({});

  const [historyDetails, setHistoryDetails] = useState("");




  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>

      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Navbar setLogin={setLogin} />

        <Routes>
          {login ? (
            <Route
              path="/"
              element={<Uploadbox apkinfo={apkinfo} setApkinfo={setApkinfo} />}
            />
          ) : (
            <Route path="/" element={<Bodytext />} />
          )}

          <Route path="/details" element={<Details apkinfo={apkinfo} />} />
          <Route
            path="/history"
            element={
              <History
                historyDetails={historyDetails}
                setHistoryDetails={setHistoryDetails}
              />
            }
          />
          <Route path="/guides" element={<Guides />} />
          <Route
            path="/history/details"
            element={<Historydetails historyDetails={historyDetails} />}
          />

          {/* <Details /> */}
        </Routes>

        <Options/>
      </Auth0Provider>
    </BrowserRouter>
  );
}

export default App;
