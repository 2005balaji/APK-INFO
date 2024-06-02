import React from "react";
import Head from "@components/navbar";
// AWS

// components
import UploadBox from "@components/uploadbox";

const Navbar: React.FC = () => {
  return (
    <>
      <Head />
      <UploadBox />
    </>
  );
};

export default Navbar;
