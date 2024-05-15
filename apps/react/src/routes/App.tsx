import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// AWS
import { useAuthenticator } from "@aws-amplify/ui-react-core";

// components
import UploadBox from "../../components/uploadbox";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const { signOut, authStatus, isPending } = useAuthenticator((context) => [
    context.user,
  ]);

  useEffect(() => {
    // if the user is already authenticated, redirect to the app
    if (authStatus === "unauthenticated" || authStatus === "configuring") {
      navigate("/");
    }
  }, [authStatus, isPending, navigate]);

  // helper
  const handleSignOut = () => {
    signOut();
  };
  return (
    <>
      <header className=" p-2 flex justify-between items-center bg-white flex-wrap top-0">
        <div className="header1" id="header1">
          <img
            src="https://www.google.com/logos/doodles/2024/india-general-elections-2024-ph-4-6753651837110505.2-s.png"
            alt=""
            id="logo"
          />
        </div>

        <button
          onClick={handleSignOut}
          className="text-white bg-black cursor-pointer font-semibold text-lg hover:text-blue-300 px-5 py-2"
        >
          Sign Out
        </button>
      </header>

      <UploadBox />
    </>
  );
};

export default Navbar;
