import { ApiError, get as apiGet, post as apiPost } from "@aws-amplify/api";
import React from "react";
import { Button } from "@aws-amplify/ui-react";

function Temp() {
  const getData = async (data: unknown) => {
    try {
      const restOperation = apiGet({
        apiName: "crud",
        path: "/crud",
      });

      const res = await restOperation.response;

      console.log("GET call succeeded");
      console.log(await res);
      const { body } = res;

      console.log("GET call succeeded");
      console.log(await body.text());
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.response) {
          const { statusCode, body } = error.response;
          console.error(
            `Received ${statusCode} error response with payload: ${body}`
          );
        }
      }
    }
  };

  const postData = async (data: unknown) => {
    try {
      const restOperation = apiPost({
        apiName: "crud",
        path: "/crud",
        options: {
          body: {
            test: "hi",
          },
        },
      });

      const res = await restOperation;

      console.log("POST call succeeded");
      console.log(await res);
    } catch (error) {
      if (error instanceof ApiError) {
        if (error) {
          console.error(`Received error response with payload: ${error}`);
        }
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <Button onClick={() => getData("hi")}>Get</Button>

      <Button onClick={() => postData("hi")}>Post</Button>
    </div>
  );
}

export default Temp;
