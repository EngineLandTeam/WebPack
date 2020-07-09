const path = require("path");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    form: path.resolve(__dirname, "src/js/form.js"),
    select: path.resolve(__dirname, "src/js/select.js"),
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./assets/js/[name].js",
  },
};
