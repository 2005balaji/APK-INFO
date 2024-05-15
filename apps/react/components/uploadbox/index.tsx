import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Androidrobot from "../Images/androidrobot.gif";
import "./Uploadbox.css";
import { VscCloudUpload } from "react-icons/vsc";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Options from "../options/options";

//

// import socketIOClient from "socket.io-client";
import { useAuthenticator } from "@aws-amplify/ui-react-core";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Uploadbox(props: unknown) {
  const notify = () =>
    toast.error("Only APK files are allowed", {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: 1,
      theme: "light",
    });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { authStatus } = useAuthenticator((context) => [context.user]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [socket, setSocket] = useState(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false); // Add loading state

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();

  // useEffect(() => {
  //   setSocket(
  //     socketIOClient(process.env.REACT_APP_SERVER_SOCKET_URL, {
  //       transports: ["websocket"],
  //     })
  //   );
  // }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleFileSelect = (file: unknown) => {
    // setLoading(true); // Set loading state to true
    // const message = user.sub;
    // const data = {
    //   file: file,
    //   authId: message,
    // };
    // socket.emit("upload", data);
    // socket.on("data", (apkdatas) => {
    //   props.setApkinfo({ ...apkdatas });
    //   navigate("/details");
    //   setLoading(false); // Set loading state to false when data is received
    // });
  };

  const onDrop = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (acceptedFiles: any[]) => {
      let filetype;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      acceptedFiles.forEach((file: { type: any }) => {
        filetype = file.type;
      });

      if (filetype != "application/vnd.android.package-archive") {
        notify();
      } else {
        handleFileSelect(acceptedFiles[0]);
      }
    },
    [socket]
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "apk/file": [".apk"],
    },
  });

  return (
    <>
      {loading ? (
        <div id="loader1">
          <img src={Androidrobot} id="androidbot" alt="" />
          <p id="analyzing">
            Analyzing your file<span className="loader__dot">.</span>
            <span className="loader__dot">..</span>
          </p>
        </div>
      ) : (
        <div className="uploadwindow">
          <p className="labeltxt">
            Get the inside scoop on all your favourite Android apps!
          </p>

          <div className="dnd-container" {...getRootProps()}>
            <div className="dnd">
              <VscCloudUpload id="cloudlogo" />
              <p id="minilabel">Drag & drop to upload</p>
              <label>
                {socket && <input {...getInputProps()} />}
                <p id="dndbutton">or browse</p>
              </label>

              <p id="format">.apk format only</p>
            </div>
          </div>

          {/* <Options /> */}
        </div>
      )}

      <ToastContainer
        position="bottom-center"
        autoClose={false}
        limit={2}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        theme="light"
      />
    </>
  );
}

export default Uploadbox;
