module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
};

//"@babel/preset-react", serve para o babel traduzir o código react para o navegador
