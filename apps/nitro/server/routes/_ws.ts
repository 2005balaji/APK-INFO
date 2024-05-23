import { runCore } from "~~/ utils/core";
import fs from "fs";
export default defineWebSocketHandler({

  open(peer) {
    console.log("Socket Initiated", peer);
  },

  message(peer, message) {

    // am getting an apk data as buffer usinf fs module store in local

    // collect the binary data


    console.log("Binary Data", message);

    fs.writeFile("apk.apk", message, (err) => {

      if (err) {
        console.log(err);
      }
      console.log("File written successfully\n");

    });
    // const buffer = Buffer.from(message.isBinary());


  },

  close(peer, event) {
    console.warn('Socket Closed', peer, event)
  },

  error(peer, error) {
    console.error('Socket Error', peer, error)
  },
});

