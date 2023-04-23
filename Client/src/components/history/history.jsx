import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./history.css";
import Loading from "../Images/loading/docload.gif";
import { ReactComponent as DeleteIcon } from "../Images/history/delete.svg";
import LoadingText from "../loading/loading";

function History(props) {
  const { user, isLoading } = useAuth0();
  const [apkinfo, setApkinfo] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetch(process.env.REACT_APP_FETCH_URL + "/" + user.sub)
        .then((res) => res.json())
        .then((res) => {
          setApkinfo(res);
          setLoading(false);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    axios
      .delete(process.env.REACT_APP_FETCH_URL + "/" + id)
      .then((data) => {
        setApkinfo(apkinfo.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function historydetails(details, id) {
    props.setHistoryDetails(details);
    navigate("/history/details");
  }

  return (
    <>
      <div id="padadj">
        <p id="logHeading">My Logs</p>
        {isLoading ? (
          <div>


            <LoadingText />

          </div>
        ) : loading ? (
          <img src={Loading} alt="" id="documentgif" />
        ) : (
          <>
            <hr id="historyHR" />
            <table className="logTable">
              <thead id="tablehead">
                <tr className="bottomborder">
                  <th id="tableheadtd">Application Name</th>
                  <th id="tableheadtd">Report generated on</th>
                  <th id="tableheadtd">Actions</th>
                </tr>
              </thead>
              <tbody>
                {apkinfo.reverse().map((item, i) => {
                  let itemname = item.application_Name;
                  let logDate = item.date;
                  if (itemname !== undefined) {
                    return (
                      <tr key={i} className="bottomborders">
                        <td className="histrytd">{itemname}</td>
                        <td className="histrytd">{logDate}</td>
                        <td className="histrytd" id="actionTabs">
                          <span
                            id="viewbtn"
                            onClick={() => {
                              historydetails(item, item._id);
                            }}
                          >
                            View
                          </span>
                          <span id="viewbtw"></span>
                          <span
                            id="deleteIcon"
                            onClick={() => handleDelete(item._id)}
                          >
                            <DeleteIcon />

                          </span>
                        </td>
                      </tr>
                    );
                  } else {
                    return null;
                  }
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}

export default History;
