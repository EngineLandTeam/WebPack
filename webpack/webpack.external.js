const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/js/external.js"),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"), //carpeta de production
    filename: "./assets/js/external.js", //ubicacion del archivo generado
  },
};
