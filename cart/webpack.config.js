const { ModuleFilenameHelpers } = require("webpack");
const HWP = require("html-webpack-plugin");
const MFP = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new MFP({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartShow": "./src/index.js",
      },
    }),
    new HWP({
      template: "./public/index.html",
    }),
  ],
};
