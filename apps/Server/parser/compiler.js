const { mongodb } = require("../models/model");
const { exec } = require("child_process");
const commands = require("../enum");

const {
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
  funcPermissions,
  funcSignature,
} = require("./parser");


function currentDate() {
  const now = new Date();
  const date = now.toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' });
  const time = now.toLocaleString('default', { hour: 'numeric', minute: 'numeric' });

  return(`${date}, ${time}`);
}


async function dataFuntions(data, id, applicationName) {
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
  const permissions = await funcPermissions(applicationName);
  const languages = funcLanguages(data);
  const signatures = await funcSignature(applicationName);
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
    permissions,
    languages,
    signatures,
    date
  };

  mongodb(info);

  fileDeleter(applicationName);

  return info;
}

async function fileDeleter(applicationName) {
  exec(commands.deleter + applicationName, (a, b, c) => {
    console.log("All Files deleted ");
  });
}

module.exports = { dataFuntions };
