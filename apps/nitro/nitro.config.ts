import nitroPort from "nitro-port-module";

export default defineNitroConfig({
  modules: [
    nitroPort({
      port: 6969,
    }),
  ],
  experimental: {
    websocket: true
  },
  srcDir: "server"

});