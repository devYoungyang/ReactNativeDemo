/*
 * @Author: Yang
 * @Date: 2022-03-03 15:33:36
 * @LastEditors: Yang
 * @LastEditTime: 2022-03-03 15:34:44
 * @FilePath: /ReactNativeDemo/src/Store/RootStore.js
 * @Description: 头部注释
 */

import Counter from "./Counter";

class RootStore {
    constructor() {
        this.counter = new Counter();
    }
}

export default new RootStore();


