const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const postCssModulesValues = require('postcss-modules-values');

const devMode = process.env.NODE_ENV !== 'production';

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src')
};

const cleanOptions = {
  verbose: true
};

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: devMode ? '[name].css' : '[name].[hash].css',
  chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
});
const cleanWebpackPlugin = new CleanWebpackPlugin(cleanOptions);
const namedModulesPlugin = new webpack.NamedModulesPlugin();

module.exports = {
  entry: path.join(paths.JS, 'index.js'),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [postCssModulesValues]
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          'file-loader',
        ]
      }
    ]
  },
  output: {
    path: paths.DIST,
    filename: 'index.bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin,
    miniCssExtractPlugin,
    namedModulesPlugin
  ]
};
