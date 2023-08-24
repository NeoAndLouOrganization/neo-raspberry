import path from "path";

// import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { Configuration } from "webpack";
// import webpack, { Configuration } from 'webpack';

const webpackConfig: Configuration = {
  entry: "./src/server.ts",
  mode: "development",
  target: "node",
  devtool: "source-map",
  resolve: {
    // plugins: [
    //   new TsconfigPathsPlugin({
    //     configFile: path.resolve(__dirname, "./tsconfig.json"),
    //   }),
    // ],
    extensions: [".ts", ".js"],
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "./dist"),
    filename: "server.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
};

export default webpackConfig;
