const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const isDev = process.env.NODE_ENV !== "production";

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
});

module.exports = {
  entry: "./src/index.tsx",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: isDev ? "development" : "production",
  plugins: [htmlPlugin],
};
