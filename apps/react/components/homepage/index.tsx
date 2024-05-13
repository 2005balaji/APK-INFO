import { LockClosedIcon } from "@heroicons/react/16/solid";
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
        <div className="flex items-center justify-center gap-8">
          <span id="navspan">Whats happens?</span>

          <button className="getStartedlogin flex gap-2">
            <LockClosedIcon className=" h-5 w-5" />
            Authenticate
          </button>
        </div>

        <div
          id="hometext"
          style={{ fontFamily: "Inter, Helvetica", fontWeight: "bolder" }}
        >
          <div id="centertext">
            Get the inside scoop on all your favourite Android apps!
          </div>

          <button className=" mt-4 bg-black text-white font-inter font-semibold text-lg leading-6 rounded-sm px-9 py-3 cursor-pointer">
            Get Started
          </button>
        </div>
      </header>
    </>
  );
};

export default HomePage;
