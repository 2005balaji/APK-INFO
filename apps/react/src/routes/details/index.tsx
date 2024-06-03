import Table from "@components/details/Table";
import Head from "@components/navbar";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ofetch } from "ofetch";

// const analyseApi = import.meta.env.VITE_ANALYSE_API as string;
const analyseApi = `http://localhost:6969/api/analyse`;
function Details() {
  const { "*": params } = useParams() as {
    "*": string;
  };

  useEffect(() => {
    try {
      ofetch(analyseApi, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Expose-Headers": "*",
        },
        body: JSON.stringify({
          s3Path: params,
        }),
      }).finally(() => {
        console.log("done");
      });

      // Process the response data here
    } catch (error) {
      // Handle any errors that occur during the API call
    }
  }, [params]);

  return (
    <>
      <Head />
      <Table
        apkinfo={{
          application_Name: "Test",
          permissions: "android.permission.INTERNET",
          features: "android.hardware.camera",
          languages: "en",
          minsdkVersion: "21",
          signatures: "ddf",
          supportedScreendensities: "hdpi",
          targetSdkVersion: "30",
          versionCode: "1",
          supportScreensizes: "small",
          versionName: "1.0",
        }}
      />
    </>
  );
}

export default Details;
