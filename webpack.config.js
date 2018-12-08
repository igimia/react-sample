module.exports = {
  mode: 'development',
  entry: __dirname + "/src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "like-button.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader'
        }
      }
    ]
  }
};

