import React,{useContext} from 'react';
import {Text, View, Button} from "react-native";
import styles from "../styles";
import context from '../../data/context';

const Page = () => {
	const {store,actionChangeV1} = useContext(context);
	return (
		<View style={styles.container}>
			<Text>{store.x1.v1}</Text>
			<Button title={'ClickMe'} onPress={()=>actionChangeV1('xx001')}/>
		</View>
	)
};

export default Page;
