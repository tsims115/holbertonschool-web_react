const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    assetModuleFilename: '[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        filename: './dist/index.html' //relative to root of the application
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    static: path.join(__dirname, './public'),
    port: 8564,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        use: ["file-loader", "image-webpack-loader"],
      },
    ],
  },
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
};
