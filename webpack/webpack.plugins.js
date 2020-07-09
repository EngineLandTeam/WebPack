const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    form: path.resolve(__dirname, "src/js/form.js"),
    select: path.resolve(__dirname, "src/js/select.js"),
  },
  // mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "./assets/js/app.js",
    filename: "./assets/js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          //"style-loader", //Inyecta Css en el archivo Html
          "css-loader", //Reconoce la extencion Css
        ],
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
};
