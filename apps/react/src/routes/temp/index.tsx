import { useAuthenticator } from "@aws-amplify/ui-react-core";
import React from "react";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3"; // ES Modules imort
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

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

const command = new ListObjectsCommand({
  Bucket: bucket,
});

const response = client.send(command);

function Temp() {
  console.log(response.then((data) => console.log(data)));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { authStatus, user } = useAuthenticator((context) => [context.user]);

  const navigate = useNavigate();

  const uploadData = async (data: unknown) => {
    console.log(data);
    navigate("/details/balaji");
  };

  return (
    <div>
      Hi
      <Button onClick={() => uploadData(response)}>Upload</Button>
    </div>
  );
}

export default Temp;
