import React, { useEffect } from "react";
import "./historydetails.css";
import { useNavigate } from "react-router-dom";

function HistoryDetails(props) {
  const navigate = useNavigate();

  function navigateToHistory() {
    navigate("/history");
  }

  const name = props.historyDetails?.application_Name;

  useEffect(() => {
    if (!name) {
      navigate("/history");
    }
  }, []);

  return (
    <>
      <p id="logdetailsHeading">
        <span id="logstyle" onClick={navigateToHistory}>
          My Logs
        </span>
      </p>

      <div id="logDetailsAppName">
        {props.historyDetails.application_Name}
      </div>

      <div id="logDetailsTimeStamp">
        <span>Report generated on {props.historyDetails.date}</span>
      </div>

      <hr id="historyHR" />
      <div id="details outerdiv">
        <div id="toc">
          <table id="tablebottompadding">

            <tbody>
              <tr>
                <td id="tableborder">Application name</td>
                <td id="tableborder">
                  {props.historyDetails.application_Name}
                </td>
              </tr>
              <tr>
                <td id="tableborder">MinSDK version</td>
                <td id="tableborder">{props.historyDetails.minsdkVersion}</td>
              </tr>
              <tr>
                <td id="tableborder">TargetSdk version</td>
                <td id="tableborder">
                  {props.historyDetails.targetSdkVersion}
                </td>
              </tr>
              <tr>
                <td id="tableborder">Version name</td>
                <td id="tableborder">{props.historyDetails.versionName}</td>
              </tr>
              <tr>
                <td id="tableborder">Version code</td>
                <td id="tableborder">{props.historyDetails.versionCode}</td>
              </tr>
              <tr>
                <td id="tableborder">Support screensizes</td>
                <td id="tableborder">
                  {props.historyDetails.supportScreensizes}
                </td>
              </tr>

              <tr>
                <td id="tableborder">Supported screen densities</td>
                <td id="tableborder" className="overflow">
                  {props.historyDetails.supportedScreendensities}
                </td>
              </tr>
              <tr>
                <td id="tableborder">Features</td>
                <td id="tableborder" className="overflow">
                  {props.historyDetails.features}
                </td>
              </tr>
              <tr>
                <td id="tableborder">Permissions</td>
                <td id="tableborder" className="overflow">
                  {props.historyDetails.permissions}
                </td>
              </tr>

              <tr>
                <td id="tableborder">Languages</td>
                <td id="tableborder" className="overflow">
                  {props.historyDetails.languages}
                </td>
              </tr>

              <tr>
                <td id="tableborder">Signature</td>
                <td id="tableborder" className="overflow">
                  {props.historyDetails.signatures}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default HistoryDetails;
