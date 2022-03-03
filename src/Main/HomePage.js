/*
 * @Author: Yang
 * @Date: 2022-03-01 15:10:56
 * @LastEditors: Yang
 * @LastEditTime: 2022-03-03 17:32:04
 * @FilePath: /ReactNativeDemo/src/Main/HomePage.js
 * @Description: 头部注释
 */


import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { inject, observer } from 'mobx-react'
import HttpRequest from "../Common/HttpRequest";


@inject('counter')
@observer
class HomePage extends React.Component {

    constructor(props) {
        super(props);

    }
    componentDidMount() {
        HttpRequest.post('https://api.66mz8.com/api/music.163.php', { 'format': '其实什么都没有' }).then((res) => {
            console.log(res)
        })
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#c0d695', alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.props.counter.count}</Text>
                <TouchableOpacity
                    style={{ marginTop: 50, width: 60, height: 40, backgroundColor: 'cyan', alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => {
                        this.props.counter.increase();
                    }}
                >
                    <Text>{'+'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 50, width: 60, height: 40, backgroundColor: 'cyan', alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => {
                        this.props.counter.decrease();
                    }}
                >
                    <Text>{'-'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default HomePage;


