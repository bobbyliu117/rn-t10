import React from 'react';
import {Text, View} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/AntDesign";

const Page = () => {
	return (
		<View style={styles.container}>
			<Text>HomeA</Text>
		</View>
	)
};

Page.navigationOptions = () => {
	return {
		tabBarLabel: 'Home A',
		tabBarIcon: ({tintColor}) => <Icon name={'meh'} size={22} color={tintColor}/>
	}
};

export default Page;
