const fs = require("fs");

/// executing shell commands
const { exec } = require("child_process");

exec("cd uploads && ./aapt2 dump badging test.apk ", (a, b, c) => {
  var newtext = b + "textended";
  var str = newtext;
  var res = str.replace(/\s+/g, "");

  fs.writeFileSync("apk.txt", res);

  var data = res;


  function AppName() {
    let startIndex = data.indexOf("label=") + 7;

    let endIndex = data.indexOf("'icon='");

    if (startIndex !== -1 && endIndex !== -1) {
      let name = data.substring(startIndex, endIndex);
      console.log("App Name : " + name);
    } else {
      console.log("Name not found in data.");
    }
  }

  
  function MinSDKVersion() {
    let startIndex = data.indexOf("sdkVersion:'") + 13;

    let endIndex = data.indexOf("'targetSdkVersion:");

    if (startIndex !== -1 && endIndex !== -1) {
      let name = data.substring(startIndex, endIndex);
      console.log("Min SDK Version : " + name);
    } else {
      console.log("Name not found in data.");
    }
  }

  function versionName() {
    let startIndex = data.indexOf("versionName='") + 13;

    let endIndex = data.indexOf("'platformBuildV");

    if (startIndex !== -1 && endIndex !== -1) {
      let name = data.substring(startIndex, endIndex);
      console.log("versionName : " + name);
    } else {
      console.log("Name not found in data.");
    }
  }

  function versionCode() {
    let startIndex = data.indexOf("'versionCode='") + 14;

    let endIndex = data.indexOf("'versionName");

    if (startIndex !== -1 && endIndex !== -1) {
      let name = data.substring(startIndex, endIndex);
      console.log("versionCode : " + name);
    } else {
      console.log("Name not found in data.");
    }
  }

  function PackageName() {
    let startIndex = data.indexOf("package:name='") + 14;

    let endIndex = data.indexOf("'versionCode");

    if (startIndex !== -1 && endIndex !== -1) {
      let name = data.substring(startIndex, endIndex);
      console.log("Package Name : " + name);
    } else {
      console.log("Name not found in data.");
    }
  }

  function TargetSdkVersion() {
    let startIndex = data.indexOf("targetSdkVersion:'") + 18;

    let endIndex = data.indexOf("'uses-permis");

    if (startIndex !== -1 && endIndex !== -1) {
      let name = data.substring(startIndex, endIndex);
      console.log("Target SdkVersion : " + name);
    } else {
      console.log("Name not found in data.");
    }
  }

  function SupportScreensizes() {
    let startIndex = data.indexOf("supports-screens:") + 17;

    let endIndex = data.indexOf("supports-any-");

    if (startIndex !== -1 && endIndex !== -1) {
      let name = data.substring(startIndex, endIndex);
      console.log("Support Screen sizes: " + name);
    } else {
      console.log("Name not found in data.");
    }
  }

  function SupportedScreenDensities() {
    let startIndex = data.indexOf("u'densities:'") + 17;

    let endIndex = data.indexOf("textended");

    if (startIndex !== -1 && endIndex !== -1) {
      let name = data.substring(startIndex, endIndex);
      console.log("Supported Screen Densities: " + name);
    } else {
      console.log("Name not found in data.");
    }
  }

  function Features() {
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

      console.log("Features : " + newStr);
    } else {
      console.log("Name not found in data.");
    }
  }

  function Permissions() {
    exec("cd uploads && ./aapt2 dump permissions test.apk ", (a, values, c) => {
      console.log("Permissions : " + values);
      Languages()
    });
  }

  function Languages() {
    let startIndex = data.indexOf("locales:") + 8;

    let endIndex = data.indexOf("densities");

    if (startIndex !== -1 && endIndex !== -1) {
      let name = data.substring(startIndex, endIndex);
      console.log("Languages " + name);
    } else {
      console.log("Name not found in data.");
    }
  }

  function Signature() {
    exec(
      "cd uploads && ./keytool -printcert -jarfile test.apk ",
      (a, values, c) => {
        console.log("Signature : " + values);
      }
    );
  }

AppName();
MinSDKVersion()
versionName()
versionCode()
PackageName()
TargetSdkVersion()
SupportScreensizes()
SupportedScreenDensities()
Features()
Permissions()
Signature()
});

