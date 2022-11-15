const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
  entry: `./src/index.ts`,
  // devtool: `inline-source-map`,
  module: {
    rules: [
      {
        test: /\.ts?$/i,
        exclude: /node_modules/,
        use: `ts-loader`
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
  ],
  devServer: {
    static: `./dist`,
    compress: true,
    port: 8080,
    hot: true
  }
};
