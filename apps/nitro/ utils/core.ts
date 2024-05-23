import { exec } from "child_process";

const commands = {
  aaptDump: "aapt2 dump badging ",
  deleter: "cd resources && rm ",
} as const

function runAapt(applicationName: unknown) {
  return new Promise((resolve, reject) => {
    exec(commands.aaptDump + applicationName, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        const str = stdout + "compressed";
        const output = str.replace(/\s+/g, "");
        resolve(output);
      }
    });
  });
}

export const runCore = (a?: unknown) => {
  console.log("runCore");
}