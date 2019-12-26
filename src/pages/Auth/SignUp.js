import React from 'react';
import {View} from "react-native";
import {Text, Input, Button} from 'react-native-elements';
import styles from "../styles";
import {navigate} from '../../NavRef';

const Page = ({navigation}) => {
	return (
		<View style={styles.authContainer}>
			<Text>Sign up</Text>
			<Button title={'To Home C'} onPress={()=>{
				navigate('HomeC');
			}} />
		</View>
	)
};

Page.navigationOptions = {header:null};

export default Page;
