import { useAuthenticator } from "@aws-amplify/ui-react-core";
import { LockClosedIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import Auth from "../../middleware/auth";

const HomePage: React.FC = () => {
  const { authStatus, signOut, user } = useAuthenticator((context) => [
    context.user,
  ]);

  const [openModal, setOpenModal] = useState(false);

  const handleAuthentication = () => {
    setOpenModal(true);
  };

  const handleSignOut = () => {
    setOpenModal(false);
    signOut();
  };

  if (!openModal && authStatus == "unauthenticated") {
    return (
      <header className="headerdiv" id="headerdiv">
        <div className="header1" id="header1">
          <img
            src="https://www.google.com/logos/doodles/2024/india-general-elections-2024-ph-4-6753651837110505.2-s.png"
            alt=""
            id="logo"
          />
        </div>
        <div className="flex items-center justify-center gap-8">
          <span id="navspan">What happens?</span>

          <button
            className=" bg-black text-white font-inter font-semibold text-lg leading-6 rounded-sm px-6 py-3 cursor-pointer flex gap-2"
            onClick={handleAuthentication}
          >
            <LockClosedIcon className=" h-5 w-5" />
            Authenticate
          </button>
        </div>

        {/* body */}
        <div
          id="hometext"
          style={{ fontFamily: "Inter, Helvetica", fontWeight: "bolder" }}
        >
          <div id="centertext">
            Get the inside scoop on all your favourite Android apps!
          </div>
        </div>
      </header>
    );
  }

  if (authStatus == "authenticated") {
    return (
      <div>
        <div>Welcome, {user?.username}</div>
        {/* sign out */}
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }

  if (authStatus == "unauthenticated" && openModal) {
    return (
      <div>
        <Auth />
      </div>
    );
  }

  return (
    <div>
      <div>Loading..</div>
    </div>
  );
};

export default HomePage;
