const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// --- PRODUCTS WEBPACK ---

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      // name: the Container webpack looks for this name in the remotes' URLs. Eg "products@http://..."
      name: "products",
      // filename: Sets name of manifest file. Leave as remoteEntry unless you have a good reason to change it
      filename: "remoteEntry.js",
      exposes: {
        // These alises filenames
        "./ProductsIndex": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
