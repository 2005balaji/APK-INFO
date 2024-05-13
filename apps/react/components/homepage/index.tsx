import { BeakerIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <header className="headerdiv" id="headerdiv">
        <div className="header1" id="header1">
          <img
            src="https://www.google.com/logos/doodles/2024/india-general-elections-2024-ph-4-6753651837110505.2-s.png"
            alt=""
            id="logo"
          />
        </div>
        <span id="navspan">How to use?</span>

        <button className="getStartedlogin">
          <LockClosedIcon />
          Authenticate
        </button>
      </header>
    </>
  );
};

export default HomePage;
