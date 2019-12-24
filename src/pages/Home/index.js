import React from 'react';
import {Text, View} from "react-native";
import styles from "../styles";
import Icon from "react-native-vector-icons/AntDesign";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeA from './HomeA';
import HomeB from './HomeB';
import HomeC from './HomeC';

const Page = createBottomTabNavigator({HomeA,HomeB,HomeC},{
	tabBarOptions: {
		activeTintColor: '#801'
	}
});

export default Page;
