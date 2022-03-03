/*
 * @Author: Yang
 * @Date: 2022-03-01 13:07:02
 * @LastEditors: Yang
 * @LastEditTime: 2022-03-02 13:18:31
 * @FilePath: /ReactNativeDemo/babel.config.js
 * @Description: 头部注释
 */
module.exports = {
  presets: ['module:metro-react-native-babel-preset',],
  plugins: [["@babel/plugin-proposal-decorators", { "legacy": true }], 'react-native-reanimated/plugin',]

};
