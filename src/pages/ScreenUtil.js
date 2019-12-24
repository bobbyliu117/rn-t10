import React from 'react';
import {Text, View} from "react-native";
import styles from "./styles";

export const placeholderPage = name => () => {
	return (
		<View style={styles.container}>
			<Text style={{fontSize: 32}}>{name}</Text>
		</View>
	)
};

