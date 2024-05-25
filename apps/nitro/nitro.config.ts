import nitroPort from "nitro-port-module";
import dotenv from "dotenv";

dotenv.config();

export default defineNitroConfig({
  modules: [
    nitroPort({
      port: 6969,
    }),
  ],
  runtimeConfig: {
    viteS3Accessid: process.env.NITRO_VITE_S3_ACCESSID,
    viteS3Secretkey: process.env.NITRO_VITE_S3_SECRETKEY,
    viteS3BucketName: process.env.NITRO_VITE_S3_BUCKET_NAME,
  },
  srcDir: "server"

});