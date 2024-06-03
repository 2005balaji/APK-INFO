import {
  funcApplicationName,
  funcMinSdkVersion,
  funcVersionName,
  funcVersionCode,
  funcLanguages,
  funcPackageName,
  funcTargetSdkVersion,
  funcSupportScreensizes,
  funcSupportedScreenDensities,
  funcFeatures,
} from "./parser";

function currentDate() {
  const now = new Date();
  const date = now.toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = now.toLocaleString("default", {
    hour: "numeric",
    minute: "numeric",
  });

  return `${date}, ${time}`;
}

export async function dataFuntions(data, id, applicationName) {
  const authId = id;
  const application_Name = funcApplicationName(data);
  const minsdkVersion = funcMinSdkVersion(data);
  const versionName = funcVersionName(data);
  const versionCode = funcVersionCode(data);
  const packageName = funcPackageName(data);
  const targetSdkVersion = funcTargetSdkVersion(data);
  const supportScreensizes = funcSupportScreensizes(data);
  const supportedScreendensities = funcSupportedScreenDensities(data);
  const features = funcFeatures(data);
  const languages = funcLanguages(data);
  const date = currentDate();

  const info = {
    authId,
    application_Name,
    minsdkVersion,
    versionName,
    versionCode,
    packageName,
    targetSdkVersion,
    supportScreensizes,
    supportedScreendensities,
    features,
    languages,
    date,
  };

  return info;
}
