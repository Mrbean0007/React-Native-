import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export class HomeScreen extends Component {
  
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Foodie" onPress={() => this.props.navigation.push('Food')}/>  
        <Button title="Electronic" onPress={() => this.props.navigation.push('Electronic')}/>  
        <Button title="Music" onPress={() => this.props.navigation.push('Music')}/>  
        <Button title="Series" onPress={() => this.props.navigation.push('Series')}/>  
        <Button title="Technology " onPress={() => this.props.navigation.push('Technology')}/>  
        </View>
    );
  }
}

export class DetailsScreen extends Component {

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details</Text>
        {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
        <Button title="Go to Details... again"onPress={() => this.props.navigation.push('Details')} />
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
        <Button title="Go back to first screen in stack"onPress={() => this.props.navigation.popToTop()}/>
        </View>
        
    );
  }
}

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            Stack: createStackNavigator(),
        }
     
    }
    render() {

        return (
            <NavigationContainer>
            <this.state.Stack.Navigator initialRouteName="Home">
                <this.state.Stack.Screen  name="Home" component={HomeScreen} />
                <this.state.Stack.Screen name="Details" component={DetailsScreen} />
            </this.state.Stack.Navigator>
            </NavigationContainer>
        );

    }
}


 // {itemId:86,otherParam:'anything'}
    // const { itemId, otherParam } = this.props.route.params;