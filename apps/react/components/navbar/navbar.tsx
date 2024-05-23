import React, { useEffect } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react-core";
import { useNavigate } from "react-router-dom";

const Head: React.FC = () => {
  const navigate = useNavigate();

  const { signOut, authStatus, isPending } = useAuthenticator((context) => [
    context.user,
  ]);

  useEffect(() => {
    // if the user is already authenticated, redirect to the app
    if (authStatus === "unauthenticated") {
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

        <div className="flex flex-row justify-between gap-12 items-center">
          <div className="text-black font-semibold text-lg hover:text-green-600 cursor-pointer">
            My Logs
          </div>

          <button
            onClick={handleSignOut}
            className="text-white bg-black cursor-pointer font-semibold text-lg hover:text-red-700 px-5 py-2"
          >
            Sign Out
          </button>
        </div>
      </header>
    </>
  );
};

export default Head;
