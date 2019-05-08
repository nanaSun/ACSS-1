'use strict';
const path = require('path');
const webpack = require('webpack'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {getStyleLoaders,cssRegex,cssModuleRegex,sassRegex,sassModuleRegex}=require("./webpack.css")

const publicPath = './';

const NODE_ENV = "production";

module.exports={
  mode: NODE_ENV,
  devServer: {
    contentBase: path.join(__dirname, 'dist1'),
    compress: true,
    hot: true,
    port: 9000
  },
  entry: [
    require.resolve('webpack-dev-server/client') + '?/',
    require.resolve('webpack/hot/dev-server'),
    path.resolve(__dirname,'src/index')
  ],
  output: {
    path: path.resolve(__dirname,'dist'),
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: publicPath,
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            use: getStyleLoaders({importLoaders: 1 }, "",NODE_ENV),
          },
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: getStyleLoaders({ importLoaders: 2 }, 'sass-loader',NODE_ENV),
          }
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template:"./src/index.html",
        inject:true
    }),
    new MiniCssExtractPlugin({
      filename:  'ACSS.css',
      chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};