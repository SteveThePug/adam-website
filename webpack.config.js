const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    adam: "./src/adam.js",
    multipleScenes: "./src/multipleScenes.js",
    day2: "./src/day2.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
};
