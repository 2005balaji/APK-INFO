import nitroPort from "nitro-port-module";

export default defineNitroConfig({
  modules: [
    nitroPort({
      port: 6969,
    }),
  ],
  runtimeConfig: {
    viteS3Accessid: "",
    viteS3Secretkey: "",
    viteS3BucketName: "",
  },
  srcDir: "server"

});