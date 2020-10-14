const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    historyApiFallback: true
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: {
          loader: 'ts-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            // options: {
            //   modules: {
            //     localIdentName: '[name]__[local]--[hash:base64:5]',
            //   },
            // }
          },
          'sass-loader'
        ]
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[path][name].[ext]',
      //     publicPath: 'img',
      //   },
      // },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Development',
    }),
    new CopyWebpackPlugin(
      {
        patterns: [
          { from: path.resolve(__dirname, 'src/assets/img'), to: `img` },
          { from: path.resolve(__dirname, 'src/assets/favicon'), to: `favicon` }
        ]
      },
    ),
  ],
};
