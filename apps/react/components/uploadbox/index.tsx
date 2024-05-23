import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Androidrobot from "../Images/androidrobot.gif";
import { uploadData } from "aws-amplify/storage";
import "./Uploadbox.css";
import { VscCloudUpload } from "react-icons/vsc";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Options from "../options/options";

//

// import socketIOClient from "socket.io-client";

import { useAuthenticator } from "@aws-amplify/ui-react-core";
import React from "react";
import {
  S3Client,
  ListObjectsCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3"; // ES Modules imort

const key = import.meta.env.VITE_S3_ACCESSID as string;
const secret = import.meta.env.VITE_S3_SECRETKEY as string;
const bucket = import.meta.env.VITE_S3_BUCKET_NAME as string;

const client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: key,
    secretAccessKey: secret,
  },
});

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
  const { authStatus, user } = useAuthenticator((context) => [context.user]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [socket, setSocket] = useState(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false); // Add loading state

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();

  const handleFileSelect = async (file: File) => {
    try {
      // const writeobject =

      const command = new PutObjectCommand({
        Bucket: bucket,
        Key: file.name,
        Body: file,
        ContentType: file.type,
      });

      const response = await client.send(command);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
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
