import React from 'react';
import {View,SafeAreaView} from 'react-native';
import {Button,Text} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import styles from "../styles";

const Page = ({navigation}) => {
	AsyncStorage.setItem('@key', 'value1');

	return (
		<SafeAreaView>
			<Text>Home A1</Text>
			<Button title='TO A2' onPress={()=>navigation.navigate('loginFlow')}/>
		</SafeAreaView>
	)
};

Page.navigationOptions = {header:null};

export default Page;
