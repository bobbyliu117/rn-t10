import React from 'react';
import {AppRegistry,StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const App = ({}) => {
  return (
    <View style={styles.container}>
      <Icon name='meh' size={30} />
      <Text>Chang..Yo12</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

AppRegistry.registerComponent('t10', () => App);

