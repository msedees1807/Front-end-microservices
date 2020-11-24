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
        "./CartShow": "./src/bootstrap.js",
      },
      //singleton true means only one version of faker can be used / shared
      shared: {
        faker: {
          singleton: true,
        },
      },
    }),
    new HWP({
      template: "./public/index.html",
    }),
  ],
};
