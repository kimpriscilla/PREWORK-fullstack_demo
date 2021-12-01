const path = require("path");

module.exports = {
  entry: "./client/index.js", //! where your starting file is
  output: {
    //! where webpack outputs files
    path: path.join(__dirname, "public"), // replaces dist folder?? not sure
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
};
