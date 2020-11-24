const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// --- CONTAINER WEBPACK ---

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      // Name: is added for clarity, used for remotes only
      name: "container",
      // Remotes: Lists projects that the container can search to get more code
      remotes: {
        // products: Loads file listed at this URL if anything in container has an import:
        //eg: import "products/ProductsIndex";  (bootstrap.js)
        products: "products@http://localhost:8081/remoteEntry.js",
        // "products@URL" related to the Products webpack config 'name' and file path URL

        cart: "cart@http://localhost:8082/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
