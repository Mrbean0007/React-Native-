import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import 'react-native-gesture-handler';


export default class App extends Component {
 
    
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#36213E' }}>
        <Text>Main</Text>
      </View>
    );
  }
}