/*
 * @Descripttion: 
 * @version: 
 * @Author: chao
 * @Date: 2019-08-09 10:10:34
 * @LastEditors: chao
 * @LastEditTime: 2019-08-09 10:10:45
 */
const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist")
  }
};
