const socketIO = require("socket.io");
const fs = require("fs");
const { exec } = require("child_process");
const { dataFuntions } = require("../parser/compiler");
const commands = require("../enum");

const io = socketIO({
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
  maxHttpBufferSize: 1e9, // (upload buffer size has been increased by 1000 MB)
});

function runAapt(applicationName) {
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

async function renderData(authId, applicationName, socketId, socket) {
  const data = await runAapt(applicationName);

  const apkdata = await dataFuntions(data, authId, applicationName);
  console.log("APK details are sent");
  io.to(socketId).emit("data", apkdata);
  socket.disconnect(true);
}

io.on("connection", (socket) => {
  console.log(socket.id)
  // console.log(socket)
  socket.on("upload", async (datas) => {
    let authId = datas.authId;

    let applicationName = `app-${socket.id}.apk`;

    await fs.promises.writeFile(`./resources/${applicationName}`, datas.file);

    renderData(authId, applicationName, socket.id, socket);
  });
});

module.exports = io;
