import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Loading from "../../components/Images/loading/docload.gif";
import { TrashIcon as DeleteIcon } from "@heroicons/react/24/solid";
import { useAuthenticator } from "@aws-amplify/ui-react-core";
import { post } from "aws-amplify/api";

function LoadingText() {
  return (
    <div>
      <div id="internetLoading">
        Loading<span className="loader__dot">.</span>
        <span className="loader__dot">..</span>
      </div>
    </div>
  );
}

function History() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { authStatus, user } = useAuthenticator((context) => [context.user]);

  const [apkinfo, setApkinfo] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  async function postTodo() {
    try {
      const restOperation = post({
        apiName: "crud",
        path: "/crud",

        options: {
          body: {
            message: "Mow the lawn  dude",
          },
        },
      });

      console.log("POST call initiated");

      console.log(await restOperation);
      const { body } = await restOperation.response;
      const response = await body.json();

      console.log("POST call succeeded");
      console.log(response);
    } catch (e) {
      console.log("POST call failed: ", JSON.parse(e.response.body));
    }
  }
  useEffect(() => {
    postTodo();
    if (user) {
      fetch(`google.com` + "/")
        .then((res) => res.json())
        .then((res) => {
          setApkinfo(res);
          setLoading(false);
        });
    }
  }, [user]);

  // const handleDelete = (id: string) => {
  //   console.log(id);
  // };

  // function historydetails(details: unknown, id: string) {
  //   props.setHistoryDetails(details);
  //   navigate("/history/details");
  // }

  return (
    <>
      <div id="padadj">
        <p id="logHeading">My Logs</p>
        {loading ? (
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
                  const itemname = "application_Name";
                  const logDate = "item.date";
                  if (itemname !== undefined) {
                    return (
                      <tr key={i} className="bottomborders">
                        <td className="histrytd">{itemname}</td>
                        <td className="histrytd">{logDate}</td>
                        <td className="histrytd" id="actionTabs">
                          <span id="viewbtn">View</span>
                          <span id="viewbtw"></span>
                          <span id="deleteIcon">
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
