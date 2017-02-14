const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/storius.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: 'source-maps',
  module: {
    loaders: [
    {
      test: [/\.jsx?$/, /\.js?$/,]
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    },
    {
      test: /\.node$/,
      loader: "node-loader"
    }
    ]
  }
};
