
#### 1.安装依赖

`yarn add @react-navigation/native`

`yarn add react-native-screens react-native-safe-area-context`

`npx pod-install ios`

`yarn add react-native-router-flux`

`yarn add react-native-screens`

`yarn add react-native-gesture-handler`

`yarn add react-native-reanimated`

`yarn add react-native-react-native-safe-area-context`

`yarn add @react-native-community/masked-view`

`yarn add mobx mobx-react`



####2.注意事项

###### mobx启用装饰器语法：

###### 安装支持装饰器所需的依赖：`npm i --save-dev @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators`



###### 进入项目根目录找到babel.config.js文件，添加 `plugins: [ ["@babel/plugin-proposal-decorators", { "legacy": true }], ]`



###### 在vsocde设置中搜索experimentalDecorators勾选



##### react-native-router-flux需要配置项

###### 进入项目根目录找到babel.config.js文件，添加`plugins: ['react-native-reanimated/plugin']`











