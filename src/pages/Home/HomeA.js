import React from 'react';
import Icon from "react-native-vector-icons/AntDesign";
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {placeholderPage} from '../ScreenUtil';

const Page = createMaterialTopTabNavigator({
	TabA: placeholderPage('Tab A'),
	TabB: placeholderPage('Tab B')
},{});

Page.navigationOptions = () => {
	return {
		tabBarLabel: 'Home A',
		tabBarIcon: ({tintColor}) => <Icon name={'meh'} size={22} color={tintColor}/>
	}
};

export default Page;
