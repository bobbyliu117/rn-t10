import React from 'react';
import {View} from "react-native";
import {Text, Input, Button} from 'react-native-elements';
import styles from "../styles";

const Page = ({navigation}) => {
	return (
		<View style={styles.authContainer}>
			<Text h3>Sign in</Text>
			<Input label={'Email'} />
			<Input label={'Password'} />
			<Button title={'Sign in'} onPress={()=>navigation.navigate('mainFlow')}/>
			<Button title={'Sign up'} onPress={()=>navigation.navigate('SignUp')}/>
		</View>
	)
};

Page.navigationOptions = {header:null};

export default Page;
