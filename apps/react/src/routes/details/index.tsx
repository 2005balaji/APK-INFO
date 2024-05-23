import Table from "../../../components/details/Table";
import Head from "../../../components/navbar/navbar";

function Details() {
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
