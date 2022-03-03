/*
 * @Author: Yang
 * @Date: 2022-03-03 15:27:47
 * @LastEditors: Yang
 * @LastEditTime: 2022-03-03 15:30:23
 * @FilePath: /ReactNativeDemo/src/Store/Counter.js
 * @Description: 头部注释
 */


import { makeAutoObservable, observable } from "mobx";

class Counter {

    constructor() {
        makeAutoObservable(this);
    }

    @observable count = 0;

    increase() {
        this.count += 1;
    }

    decrease() {
        this.count -= 1;
    }
}

export default Counter;

