import React from "react";
import logo from "../Images/header/logo.svg";
import "../styles.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  const { isAuthenticated, isLoading, user } = useAuth0();

  useEffect(() => {
    if (user) {
      props.setLogin(true);
    }
  }, [user]);

  //routes
  function navigatetohistory() {
    navigate("/history");
  }
  function navigatetoguides() {
    navigate("/guides");
  }
  function onClickOfLogo() {
    navigate("/");
  }

  return (
    <>
      <header className="headerdiv" id="headerdiv">
        <div className="header1" id="header1">
          <img src={logo} alt="" onClick={() => onClickOfLogo()} id="logo" />
        </div>

        <div id="grideven" className="grideven">
          {isAuthenticated ? (
            <span id="navspan" onClick={() => navigatetohistory()}>
              <Link  id="glowblue" to="/history" >

                My Logs

              </Link>
            </span>
          ) : isLoading ? (
            <span id="navspan" onClick={() => navigatetohistory()}>
              <></>
            </span>
          ) : (
            <></>
          )}
          <span id="navspan" onClick={() => navigatetoguides()}>
            <Link to="/history" id="glowblue" >
              How to use?
            </Link>
          </span>
          <div>
            <Login />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
