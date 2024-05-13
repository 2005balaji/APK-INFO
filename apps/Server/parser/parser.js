const { exec } = require("child_process");
const commands = require("../enum");

function funcApplicationName(data) {
  let startIndex = data.indexOf("label=") + 7;

  let endIndex = data.indexOf("'icon='");

  if (startIndex !== -1 && endIndex !== -1) {
    let App_Name = data.substring(startIndex, endIndex);
    return App_Name;
  } else {
    console.log("App_Name not found in data.");
  }
}

function funcMinSdkVersion(data) {
  let startIndex = data.indexOf("sdkVersion:'") + 13;

  let endIndex = data.indexOf("'targetSdkVersion:");

  if (startIndex !== -1 && endIndex !== -1) {
    let name = data.substring(startIndex, endIndex);
    // console.log("Min SDK Version : " + name);
    return name;
  } else {
    console.log("MinSdkVersion not found in data.");
  }
}

function funcVersionName(data) {
  let startIndex = data.indexOf("versionName='") + 13;

  let endIndex = data.indexOf("'platformBuildV");

  if (startIndex !== -1 && endIndex !== -1) {
    let name = data.substring(startIndex, endIndex);
    // console.log("versionName : " + name);
    return name;
  } else {
    console.log("versionName not found in data.");
  }
}

function funcVersionCode(data) {
  let startIndex = data.indexOf("'versionCode='") + 14;

  let endIndex = data.indexOf("'versionName");

  if (startIndex !== -1 && endIndex !== -1) {
    let name = data.substring(startIndex, endIndex);
    // console.log("versionCode : " + name);
    return name;
  } else {
    console.log("versionCode not found in data.");
  }
}

function funcPackageName(data) {
  let startIndex = data.indexOf("package:name='") + 14;

  let endIndex = data.indexOf("'versionCode");

  if (startIndex !== -1 && endIndex !== -1) {
    let name = data.substring(startIndex, endIndex);
    // console.log("Package Name : " + name);
    return name;
  } else {
    console.log("PackageName not found in data.");
  }
}

function funcTargetSdkVersion(data) {
  let startIndex = data.indexOf("targetSdkVersion:'") + 18;

  let endIndex = data.indexOf("'uses-permis");

  if (startIndex !== -1 && endIndex !== -1) {
    let name = data.substring(startIndex, endIndex);
    return name;
  } else {
    console.log("targetSdkVersion not found in data.");
  }
}

function funcSupportScreensizes(data) {
  let startIndex = data.indexOf("supports-screens:") + 17;

  let endIndex = data.indexOf("supports-any-");

  if (startIndex !== -1 && endIndex !== -1) {
    let name = data.substring(startIndex, endIndex);
    return name;
  } else {
    console.log("SupportScreensizes not found in data.");
  }
}

function funcSupportedScreenDensities(data) {
  let startIndex = data.indexOf("densities:'") + 11;

  let endIndex = data.indexOf("compressed");

  if (startIndex !== -1 && endIndex !== -1) {
    let name = data.substring(startIndex, endIndex);
    return name;
  } else {
    console.log("SupportedScreenDensities not found in data.");
  }
}

function funcFeatures(data) {
  let startIndex = data.indexOf("feature-group:label=''") + 22;

  let endIndex = data.indexOf("other-activities");

  if (startIndex !== -1 && endIndex !== -1) {
    let str = data.substring(startIndex, endIndex);

    let newStr = "";

    for (let i = 0; i < str.length; i++) {
      if (str[i] === "'") {
        newStr += str[i];
        while (i + 1 < str.length && str[i + 1] !== "'") {
          newStr += str[i + 1];
          i++;
        }
        newStr += "',";
      } else {
        newStr += str[i];
      }
    }

    return newStr;
  } else {
    console.log("Features not found in data.");
  }
}

function funcLanguages(data) {
  let startIndex = data.indexOf("locales:") + 8;

  let endIndex = data.indexOf("densities");

  if (startIndex !== -1 && endIndex !== -1) {
    let name = data.substring(startIndex, endIndex);
    // console.log("Languages " + name);
    return name;
  } else {
    console.log("Languages not found in data.");
  }
}

async function funcPermissions(applicationName) {
  function permission(applicationName) {
    return new Promise((resolve, reject) => {
      exec(commands.aaptPermission + applicationName, (error, stdout) => {
        if (error) {
          reject(error);
        } else {
          resolve(stdout.toString());
        }
      });
    });
  }
  try {
    const permissions = await permission(applicationName);
    return permissions;
  } catch (error) {
    console.error("error", error);
  }
}

function funcLanguages(data) {
  let startIndex = data.indexOf("locales:") + 8;

  let endIndex = data.indexOf("densities");

  if (startIndex !== -1 && endIndex !== -1) {
    let name = data.substring(startIndex, endIndex);
    return name;
  } else {
    console.log("Languages not found in data.");
  }
}

async function funcSignature(applicationName) {
  function signatures(applicationName) {
    return new Promise((resolve, reject) => {
      exec(commands.keytoolDump + applicationName, (error, stdout) => {
        if (error) {
          reject(error);
        } else {
          resolve(stdout.toString());
        }
      });
    });
  }
  try {
    const signature_s = await signatures(applicationName);
    return signature_s;
  } catch (error) {
    console.error("error", error);
  }
}

module.exports = {
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
};
