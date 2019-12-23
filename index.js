import React from 'react';
import {AppRegistry,StyleSheet, Text, View} from 'react-native';

const App = ({}) => {
  return (
    <View style={styles.container}>
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

