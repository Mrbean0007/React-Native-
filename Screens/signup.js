import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { AppRegistry,Modal,StyleSheet, Text,  View,  TextInput,Pressable,Image  } from 'react-native';

export default class SignUpScreen extends Component {
    render() {
      const login =() =>{
        this.props.navigation.navigate('Login')
      }
      const loginPress =() =>{
        this.props.navigation.navigate('Main')
      }
      return (
        <View style={styles.container}>
          <Image style={styles.image} source={require('../assets/sign-up.png')  } />

          <View style={styles.form}>
            <View style={styles.header}>
              
              <Text style={{fontFamily:'Poppins-Medium',fontSize:20,color:'#FFF',}}>Sign-up</Text>
            </View>

            <View style={styles.inputForm}>
              <TextInput style={styles.textInput}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Email Address"
                placeholderTextColor='#D3CDDF'
              />
              <TextInput style={styles.textInput}
                  // onChangeText={onChangeNumber}
                  // value={number}
                  placeholder="Mobile Number"
                  placeholderTextColor='#D3CDDF'
                  keyboardType="numeric"/>
              
              <TextInput style={styles.textInput} 
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Password"
                placeholderTextColor='#D3CDDF'
                secureTextEntry={true}
              />
              <TextInput style={styles.textInput} 
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Confirm Password"
                placeholderTextColor='#D3CDDF'
                secureTextEntry={true}
              />
              <Pressable style={styles.button}  onPress={loginPress} >
                <Text style={styles.buttonText}>Submit</Text>
              </Pressable>

              <Text style={styles.labelLoginP}>
                Already have an account?  
                  <Text onPress={login} style={styles.labelLoginC}> Login</Text>
              </Text>
            </View>
          </View>

        </View>
          
                
    );
  }
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#36213E', 
  },
  image:{
    flex:2.1,
    resizeMode: 'center',
    height:100,
    width:410,
    justifyContent:'center',
  },

  header:{
    flex:0.3,
    paddingTop:30,
    // backgroundColor:"white",
    // FCFC62   
  },

  form:{
    flex:2,
    backgroundColor:'#724583',
    // backgroundColor:'#36213E',
    // borderColor:'#BC9ACA',
    // borderWidth:3,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal:50,
    justifyContent:"center",
  },
  inputForm:{
    flex:2,
    justifyContent:"space-evenly"
  },
  textInput:{
    color:'#D3CDDF',
    borderBottomWidth:1,
    borderBottomColor:'#A678B8',
    fontSize:14,
    marginTop:10
  },
    
  button:{
    
    backgroundColor:'#E6E6E6',
    // borderColor:'#A678B8',
    borderRadius:10,
    // borderWidth:2,
    marginHorizontal:50,
    padding:3,
    marginTop:20
},

buttonText:{
    textAlign:"center",
    fontFamily:'Poppins-Medium',
    fontSize:20,
},

labelLoginP:{
    textAlign:"center",
    fontFamily:'Poppins-Regular',
    color:'#20203D',
    paddingTop:10,
},

labelLoginC:{
    color:'#DF79D8',
    fontFamily:'Poppins-Regular',
    fontWeight:"bold",

  },
});

          

 




