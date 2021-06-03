const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "bundle-[name]-[chunkhash:8].js",
    jsonpFunction: "webpackJsonp_DEMO_webpack"
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            // options: {
            //   presets: ['@babel/preset-react', '@babel/preset-react']
            // }
          }
        ]
      },
      {
        test: /\.worker\.js$/, //以.worker.js结尾的文件将被worker-loader加载
        loader: "worker-loader",
        options: {
          // esModule: true,
        }
      }
    ]
  },
};
