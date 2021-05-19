import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text,  View,  TextInput,Pressable  } from 'react-native';

export default class LoginScreen extends Component {

    render() {
        const loginPress =() =>{
            this.props.navigation.navigate('Main')
        }
        const signUp =() =>{
            this.props.navigation.navigate('SignUp')
        }
        return (
          <View style={styles.container}>
            <Text style={{justifyContent:'center',alignItems:"center", color:'#FFF'}}>Login</Text>

            
            <Text style={styles.text}>Email Id</Text>

            <TextInput style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="email id"
                />
            <Text style={styles.text}>Password</Text>

            <TextInput style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="password"
                />
            <Pressable  onPress={loginPress}>
                <Text style={styles.text}>Submit</Text>
            </Pressable>
            
            <Pressable onPress={signUp}>
                <Text style={styles.text}>SignUp</Text>
            </Pressable>
          </View>

        );
      }
    };

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#36213E', 
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding:5,
        color:'#000',
        backgroundColor:'white'

    },
    text:{
        color:'#FFF'
    }
});



