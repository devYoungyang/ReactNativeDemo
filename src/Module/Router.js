/*
 * @Author: Yang
 * @Date: 2022-03-01 15:18:27
 * @LastEditors: Yang
 * @LastEditTime: 2022-03-03 15:48:01
 * @FilePath: /ReactNativeDemo/src/Module/Router.js
 * @Description: 头部注释
 */

import React from 'react';
import { Router, Scene, Stack, Lightbox, Tabs, Drawer, Actions, } from 'react-native-router-flux';
import HomePage from '../Main/HomePage';
import FindPage from '../Main/FindPage';
import MinePage from '../Main/MinePage';
import ContactsPage from '../Main/ContactsPage';
import { Image, TouchableOpacity, View, } from 'react-native';
import HomeIcon from '../assets/home.png';
import NavigationBarItem from '../Component/NavigationBarItem';
import TabBarItem from '../Component/TabBarItem';
import SettingPage from '../Main/SettingPage';
import RootStore from '../Store/RootStore';
import { Provider } from 'mobx-react'

console.disableYellowBox = true;



const getRouter = () => {
    return <Provider {...RootStore}>
        <Router>
            <Scene key='root'>
                <Tabs key='mainTabPage' hideNavBar={true} tabs={true} tabBarStyle={{ backgroundColor: '#fff' }} activeTintColor={'#1296db'} inactiveTintColor={'#bfbfbf'} >
                    <Scene key='home' component={HomePage} showLabel={true} icon={TabBarItem} image={require('../assets/home_selected.png')} selectedImage={require('../assets/home.png')} title={'首页'} renderRightButton={() => <NavigationBarItem icon={require('../assets/saoyisao.png')} onClicked={() => {
                        console.log('-------')
                    }} />} />
                    <Scene key='contact' component={ContactsPage} icon={TabBarItem} image={require('../assets/favoriteslist_selected.png')} selectedImage={require('../assets/favoriteslist.png')} title={'通讯录'} renderRightButton={() => <NavigationBarItem icon={require('../assets/increase.png')} />} />
                    <Scene key='find' component={FindPage} icon={TabBarItem} image={require('../assets/found_selected.png')} selectedImage={require('../assets/found.png')} title={"发现"} />
                    <Scene key='mine' component={MinePage} tabBarLabel='我的' title={' '} icon={TabBarItem} image={require('../assets/mine_selected.png')} selectedImage={require('../assets/mine.png')} renderRightButton={() => <NavigationBarItem icon={require('../assets/settings.png')} onClicked={() => {
                        Actions.push('settings');
                    }} />} navTransparent={true} />
                </Tabs>
                <Scene key='settings' component={SettingPage} back={true} backButtonImage={require('../assets/back.png')} title='设置' />
            </Scene>
        </Router>
    </Provider>
}



export default getRouter;