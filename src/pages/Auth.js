import React, {useEffect} from 'react';
import {Text, View} from "react-native";
import styles from "./styles";

const Page = ({navigation}) => {
	useEffect(()=>{
		const timer = setTimeout(()=> navigation.navigate('Main',{initialValue: 'ChangLiu'}),2000);
		return () => clearTimeout(timer);
	});
	return (
		<View style={[styles.container,styles.bgBlue]}>
			<Text>Welcome</Text>
		</View>
	)
};

Page.navigationOptions = () => {
	return {
		header: null
	}
};

export default Page;
