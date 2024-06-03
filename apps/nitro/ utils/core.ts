import { exec } from "child_process";
import { dataFuntions } from "~~/parser/compiler";

const commands = {
  aaptDump: "cd ./temp && aapt2 dump badging ",
  deleter: "cd ./temp && rm -rf ",
  aaptPermission: "cd ./temp && aapt2 dump permissions ",
  keytoolDump: "cd ./temp && keytool -printcert -jarfile "
} as const

// add a funtion to delete the file after the analysis
export const deleteFile = (fileName: string) => {
  exec(commands.deleter + fileName, (error, stdout) => {
    if (error) {
      console.error(`exec error: ${error}`);
    } else {
      console.log(`deleted file ${fileName}`);
    }
  });
}

async function runAapt(applicationName: unknown) {
  const { stdout } = await new Promise<{ stdout: string }>((resolve, reject) => {
    exec(commands.aaptDump + applicationName, (error, stdout) => {
      if (error) {
        console.error(`exec error: ${error}`);
        reject(error);
      } else {
        const str = stdout + "compressed";
        resolve({ stdout: str.replace(/\s+/g, "") });
      }
    });
  });
  return stdout;
}

export const runAaptPermission = async (applicationName: unknown) => {
  const { stdout } = await new Promise<{ stdout: string }>((resolve, reject) => {
    exec(commands.aaptPermission + applicationName, (error, stdout) => {
      if (error) {
        console.error(`exec error: ${error}`);
        reject(error);
      } else {
        resolve({ stdout });
      }
    });
  });
  return stdout;
}

export const runKeytool = async (applicationName: unknown) => {
  const { stdout } = await new Promise<{ stdout: string }>((resolve, reject) => {
    exec(commands.keytoolDump + applicationName, (error, stdout) => {
      if (error) {
        console.error(`exec error: ${error}`);
        reject(error);
      } else {
        resolve({ stdout });
      }
    });
  });
  return stdout;
}



export const runCore = async (a: string) => {
  const res = await runAapt(a)

  // WIP
  const data = await dataFuntions(res, 'id', 'google.apk')

  const permissions = await runAaptPermission(a)

  const keytool = await runKeytool(a)

  // delete the file after the analysis
  deleteFile(a)

  return {
    ...data,
    permissions,
    signature: keytool
  }

}

// WIP
export const runAaptandExtract = () => {
}