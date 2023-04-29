const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/docs',
    environment: {
      module: true,
    },
    module: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'docs'),
    compress: true,
    port: 9000,
  },
  experiments: {
    outputModule: true,
  },
  externals: {
    phaser: 'Phaser',
  },
};
