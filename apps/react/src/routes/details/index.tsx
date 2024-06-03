import Table from "@components/details/Table";
import Head from "@components/navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { appData, type AppData } from "@models/index";
import { LoadingText } from "@components/composables";
const analyseApi = import.meta.env.VITE_ANALYSE_API as string;

function Details() {
  const [app, setApp] = useState<AppData | null>(null);

  const { "*": params } = useParams() as {
    "*": string;
  };

  const getData = async () => {
    try {
      const res = await axios.post(
        analyseApi,
        {
          s3Path:
            "d4388448-d0a1-70e4-a061-a00e70a2494d/1716483916084-google.apk",
        },
        {
          headers: {
            "Content-Type": "text/plain",
          },
          method: "POST",
          insecureHTTPParser: true,
        }
      );

      const data = appData.parse(res.data.body);

      setApp(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [params]);

  return (
    <>
      <Head />

      {app === null && (
        <LoadingText text={"Kindly wait while we analyse your app "} />
      )}

      {app && <Table apkinfo={app} />}
    </>
  );
}

export default Details;
