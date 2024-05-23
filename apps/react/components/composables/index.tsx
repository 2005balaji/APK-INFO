// Code: Loading Component
import React from "react";
import { useNavigate } from "react-router-dom";
export const LoadingText = (props: { text: string }) => {
  return (
    <div>
      <div id="internetLoading">
        {props.text}
        <span className="loader__dot">.</span>
        <span className="loader__dot">..</span>
      </div>
    </div>
  );
};

export const NONDetails = () => {
  const navigate = useNavigate();

  // wait for 2 seconds
  setTimeout(() => {
    navigate("/app");
  }, 2000);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" p-4 rounded-lg">
        <h1 className="text-2xl font-bold mb-2">All Good</h1>
        <div className="text-2xl">🙂</div>
        <LoadingText text={"Redirecting you to app page"} />
      </div>
    </div>
  );
};

export default {
  LoadingText,
  NONDetails,
};
