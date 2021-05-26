import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/myapp/HomeScreen'
import DetailScreen from './Screens/myapp/DetailScreen'

const Stack = createStackNavigator();
export default class App extends Component {
 
    
  render() {
    return (
    <NavigationContainer initialRouteName="Home"> 
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} options={({ route })=>({ title: route.params.name })} />
    </Stack.Navigator>        
    </NavigationContainer>
    );
  }
}