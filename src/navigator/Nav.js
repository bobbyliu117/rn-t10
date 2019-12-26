import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import HomeA1 from '../pages/Home/HomeA1';
import HomeA2 from '../pages/Home/HomeA2';
import HomeB from '../pages/Home/HomeB';
import HomeC from '../pages/Home/HomeC';

const topNavigator = createSwitchNavigator({
	loginFlow: createStackNavigator({SignIn,SignUp}),
	mainFlow: createBottomTabNavigator({
		flowA: createStackNavigator({HomeA1,HomeA2}),
		HomeB, HomeC
	})
});

export default createAppContainer(topNavigator);

