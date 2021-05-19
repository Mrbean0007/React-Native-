import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';

//Moving Screen
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screen
import OfferScreen from './Screens/offer'
import askScreen from './Screens/ask'
import main from './Screens/main'
import LoginScreen from './Screens/login'
import SignUpScreen from './Screens/signup'
//Icons
import { Entypo ,MaterialCommunityIcons,Octicons,MaterialIcons  } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();




export  class Main extends Component {
  
  render() {  
    return (
          <Tab.Navigator  initialRoute ='Home'
            backBehavior='history'
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color }) => {
                let iconName;
    
                if (route.name === 'Home') {
                  iconName='home';
                  // return <Entypo name="home" size={30} color="#554971" />;
                  // return <Octicons name="home" size={30} color="#554971" />
                  // return <MaterialIcons name="home" size={30} color="#554971" />
                } else if (route.name === 'Offer') {
                  iconName='volunteer-activism';

                  // return  <MaterialCommunityIcons name="hand-heart" size={30} color="#554971" />
                  // return  <MaterialIcons name="volunteer-activism" size={30} color="#554971" />
                  
                }
                 else if (route.name === 'Ask') {
                  iconName='campaign';
                }
                return <MaterialIcons name={iconName} size={30} color={color} />
    
                // You can return any component that you like here!
                 
              },
            })}
             
          > 
              <Tab.Screen name="Home" component={ main }  />
              <Tab.Screen name="Offer" component={ OfferScreen  } />
              <Tab.Screen name="Ask" component={ askScreen } />
          </Tab.Navigator>        
        

    );
  }
}
export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
        
        <Stack.Navigator>
          <Stack.Screen name='Login'  component={LoginScreen} />
          <Stack.Screen name='Main' options={{ headerShown: false}} component={Main} />
          <Stack.Screen name='SignUp'  component={SignUpScreen} />
        </Stack.Navigator>

      </NavigationContainer>

    )
  }

}