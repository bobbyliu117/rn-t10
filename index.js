import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/navigator/Nav';
import {Provider} from "./src/data/context";
import {setNavigator} from './src/NavRef';

AppRegistry.registerComponent('t10', () => () => {
	return (
		<Provider><App ref={navigator=>setNavigator(navigator)} /></Provider>
	)
});
