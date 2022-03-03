/*
 * @Author: Yang
 * @Date: 2022-03-03 09:54:52
 * @LastEditors: Yang
 * @LastEditTime: 2022-03-03 10:33:26
 * @FilePath: /ReactNativeDemo/src/Component/NavigationBarItem.js
 * @Description: 头部注释
 */


import React from "react";
import { View } from "react-native";
import { TouchableOpacity, Image } from "react-native";
import PropTypes from 'prop-types';

class NavigationBarItem extends React.Component {

    static propTypes = {
        icon: PropTypes.string.isRequired,
        onClicked: PropTypes.func,
    }
    static defaultProps = {

    }
    render() {
        return <TouchableOpacity activeOpacity={1} onPress={() => {
            this.props.onClicked && this.props.onClicked();
        }} >
            <Image style={{ width: 30, height: 30, right: 15 }} source={this.props.icon} ></Image>
        </TouchableOpacity>
    }
}

export default NavigationBarItem;