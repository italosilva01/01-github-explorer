const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  //arquivo principal da plicação
  mode: isDevelopment ? "development" : "production",
  entry: path.resolve(__dirname, "src", "index.jsx"),
  //saida do arquivo jsx convertido
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  //extensoes que o webpack irá converter
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  //regras de importação do webpack
  module: {
    //irei pegar todos os arquivos .jsx, menos os arquivos do node_modules e irei converter usando o babel-loader
    rules: [
      { test: /\.jsx$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
