import React from 'react';
import {AppRegistry} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import Home from './src/pages/Home';
import Auth from './src/pages/Auth';

const Main = createStackNavigator({Home});
const App = createSwitchNavigator({Auth,Main});

AppRegistry.registerComponent('t10', () => createAppContainer(App));
