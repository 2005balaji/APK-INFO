import React, { useState, useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";
import Profile from "../Images/profile.jpg";
import {ReactComponent as LogoutIcon} from "../Images/header/logout.svg";

export default function Login() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();

  const [authData, setAuthData] = useState(false);

  const authDataRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (authDataRef.current && !authDataRef.current.contains(event.target)) {
        setAuthData(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [authDataRef]);

  function handleLogout() {
    logout({ logoutParams: { returnTo: window.location.origin } });
  }

  return (
    <div className="login-container">
      {isAuthenticated ? (
        <div
          className="profile-container"
          onClick={() => {
            setAuthData(!authData);
          }}
        >
          <img src={user.picture} alt="" id="dp" />
        </div>
      ) : isLoading ? (
        <div id="loading">
          <img src={Profile} alt="" id="dp" />
        </div>
      ) : (
        <span id="profiledpdiv" onClick={loginWithRedirect}>
          <div id="signIn">Sign In</div>
          <button className="getStartedlogin" onClick={loginWithRedirect}>
            Sign Up
          </button>

        </span>
      )}

      {authData && (
        <div className="logoutWindow" ref={authDataRef}>
          <div className="Window-text">{user.name}</div>
          <div className="Window-btn-container">
            <div className="Window-btn"  onClick={handleLogout} >
              <p> Logout</p>
              <LogoutIcon id="logoutIcon" />
            </div>

           
          </div>
        </div>
      )}
    </div>
  );
}


