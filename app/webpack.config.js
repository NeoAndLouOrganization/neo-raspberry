const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Main',
      // Load a custom template (lodash by default)
      template: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './static'),
          to: path.join(__dirname, 'dist/static'),
        },
      ],
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    allowedHosts: 'all',
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 443,
    host: '0.0.0.0',
    server: {
      type: process.env.HTTPS_DEV_SERVER ? 'https' : 'http',
      options: process.env.HTTPS_DEV_SERVER
        ? {
            key: fs.readFileSync('../certs/vvasylkovskyi_com.key'),
            cert: fs.readFileSync('../certs/vvasylkovskyi_com.pem'),
          }
        : {},
    },
  },
};
