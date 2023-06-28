const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/main.js",
  externals: [
    // {
    //   jquery: {
    //     commonjs: "jquery",
    //     commonjs2: "jquery",
    //     amd: "jquery",
    //     root: "$",
    //   },
    //   lodash: {
    //     commonjs: "lodash",
    //     commonjs2: "lodash",
    //     amd: "lodash",
    //     root: "_",
    //   },
    // },
    nodeExternals()
  ],
  output: {
    library:'math',
    libraryExport:'add',
    clean: true,
  },
};

// libraryTarget: 指定库的导出方式
// module.exports = [
//   merge(baseConfig, {
//     output: {
//       filename: "[name]-window.js",
//       libraryTarget: "window",
//     },
//   }),
//   merge(baseConfig, {
//     output: {
//       filename: "[name]-commonjs.js",
//       libraryTarget: "commonjs2",
//     },
//   }),
//   merge(baseConfig, {
//     output: {
//       filename: "[name]-umd.js",
//       libraryTarget: "umd",
//     },
//   }),
//   merge(baseConfig, {
//     output: {
//       filename: "[name]-amd.js",
//       libraryTarget: "amd",
//     },
//   }),
// ];
