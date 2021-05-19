import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

export default class DetailScreen extends Component {

  
  

  render() { 
      const { randomImage } = this.props.route.params;
      const { message } = this.props.route.params;

      console.log(randomImage,message)
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image 
            source={{ uri: randomImage }}
            style={{ width: 300, height: 200}}
            />
            <Text>{ message }</Text>
          
          
          {/* <Button title="Go to Details... again" onPress={() => this.props.navigation.push('Detail')} />
          <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
          <Button title="Go back to first screen in stack"onPress={() => this.props.navigation.popToTop()}/> */}
        </View>
          
          );
        }
    }
    
    
    //   const { itemId, otherParam } = this.props.route.params;
  {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
  <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}