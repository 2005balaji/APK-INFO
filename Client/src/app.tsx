import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import Navbar from "../src/components/Navbar/navbar";
import Uploadbox from "../src/components/Uploadbox/Uploadbox";
import Details from "./components/details/details";
import History from "./components/history/history";
import Guides from "./components/guides/guides";
import Bodytext from "../src/components/bodytext/bodytext";
import Historydetails from "./components/historydetails/historydetails";

function App(): JSX.Element {
  const [apkinfo, setApkinfo] = useState({});
  const [historyDetails, setHistoryDetails] = useState("");
  const [login, setLogin] = useState(false);

  return (
    <div className="homediv">
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
          </Routes>
        </Auth0Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
