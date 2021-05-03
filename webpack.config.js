const { resolve } = require("path");
const path = require("path");

module.exports = {
  //arquivo principal da plicação
  entry: path.resolve(__dirname, "src", "index.jsx"),
  //saida do arquivo jsx convertido
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  //extensoes que o webpack irá converter
  resolve: {
    extensions: [".js", ".jsx"],
  },
  //regras de importação do webpack
  module: {
    //irei pegar todos os arquivos .jsx, menos os arquivos do node_modules e irei converter usando o babel-loader
    rules: {
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: "babel-loader",
    },
  },
};
