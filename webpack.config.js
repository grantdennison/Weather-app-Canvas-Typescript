const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
  entry: `./src/index.ts`,
  // devtool: `inline-source-map`,
  module: {
    rules: [
      {
        test: /\.ts?$/i,
        exclude: [/node_modules/, /tests/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript"]
          }
        }
      },
      {
        test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
        type: `asset/resource`
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `dist`)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/index.html`,
      inject: `body`
    })
    // new FaviconsWebpackPlugin("./src/favicon.ico")
  ],
  devServer: {
    static: `./dist`,
    compress: true,
    port: 8081,
    hot: true
  }
};
