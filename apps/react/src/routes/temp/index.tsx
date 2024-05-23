import { useAuthenticator } from "@aws-amplify/ui-react-core";
import React from "react";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3"; // ES Modules imort

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

  const uploadData = async (data: unknown) => {
    console.log(data);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#fff",
          color: "#000",
        }}
      >
        Input
        <input
          type="file"
          accept=".apk"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              const file = e.target.files[0];
              uploadData(file);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Temp;
