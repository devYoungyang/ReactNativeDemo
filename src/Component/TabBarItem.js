/*
 * @Author: Yang
 * @Date: 2022-03-03 11:19:32
 * @LastEditors: Yang
 * @LastEditTime: 2022-03-03 14:04:39
 * @FilePath: /ReactNativeDemo/src/Component/TabBarItem.js
 * @Description: 头部注释
 */

import React from "react";
import {
    Image,
    Text,
    View
} from 'react-native';
import PropTypes from 'prop-types';


class TabBarItem extends React.Component {

    static propTypes = {
        image: PropTypes.string,
        selectedImage: PropTypes.string,
    }
    static defaultProps = {
        image: '',
        selectedImage: '',
    }
    render() {
        return <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 24, height: 24 }} source={this.props.focused ? this.props.image : this.props.selectedImage} />
        </View>
    }
}

export default TabBarItem;