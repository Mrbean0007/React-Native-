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
//Custom-Fonts
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//fonts
let customFonts = {
  'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  'BerkshireSwash-Regular':require('./assets/fonts/BerkshireSwash-Regular.ttf'),
  'NunitoSans-Regular':require('./assets/fonts/NunitoSans-Regular.ttf'),
  'NunitoSans-SemiBold':require('./assets/fonts/NunitoSans-SemiBold.ttf'),
};

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
              tabBarOptions={{
                activeTintColor:'#AA61CE',
                inactiveTintColor:'#929292',

                style: { backgroundColor: '#36213E' }


              }}
              
            > 
                <Tab.Screen name="Offer" component={ OfferScreen } />
                <Tab.Screen name="Home" component={ main }  />
                <Tab.Screen name="Ask" component={ askScreen } />
            </Tab.Navigator>        
          

      );
    
    
  }
}
export default class App extends Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  
  render() {
    if (this.state.fontsLoaded) {
    
      return(
        <NavigationContainer>
          
          <Stack.Navigator>
            <Stack.Screen name='Login'  component={LoginScreen}  options={{ headerShown: false}} />
            <Stack.Screen name='Main' options={{ headerShown: false}} component={Main} />
            <Stack.Screen name='SignUp'  component={SignUpScreen}  options={{ headerShown: false}} />
          </Stack.Navigator>

        </NavigationContainer>

      )
    }
    else{
      return <AppLoading />;
    }
  }


}