import React from "react";
import "./bodytext.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingText from "../loading/loading";

function BodyText() {
  const { loginWithRedirect, isLoading } = useAuth0();

  return isLoading ? (
    <LoadingText />
  ) : (
    <div id="hometext">
      <div id="centertext">
        <>Get the inside scoop on all your favourite Android apps!</>
      </div>

      <div className="getStartedDiv">
        <button className="getStarted" onClick={loginWithRedirect}>
          <>Get Started</>
        </button>
      </div>
    </div>
  );
}

export default BodyText;
