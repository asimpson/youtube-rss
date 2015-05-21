module.exports = {
  entry: "./components/clientRoute.js",
  output: {
      path: __dirname,
      filename: "./public/js/app.js"
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: "style!css!sass" }
    ]
  }
};
