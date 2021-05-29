import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text,  View,  TextInput,Pressable,Image  } from 'react-native';




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
                
                
                    <Image style={styles.image} source={require('../assets/login.png')  } />
                


                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text style={{fontFamily:'Poppins-Medium',fontSize:20,color:'#FFF',}}>Log-in</Text>

                        </View>
                        <View style={styles.inputForm}>

                            {/* <Text style={styles.label}>Email Address</Text> */}

                            <TextInput style={styles.textInput}
                                // onChangeText={onChangeNumber}
                                // value={number}
                                placeholder="Email Address"
                                placeholderTextColor='#D3CDDF'
                            />

                            {/* <Text style={styles.label}>Password</Text> */}

                            <TextInput style={styles.textInput} 
                                // onChangeText={onChangeNumber}
                                // value={number}
                                placeholder="Password"
                                placeholderTextColor='#D3CDDF'
                                secureTextEntry={true}
                            />

                            {/* </View>
                            <View style={styles.button }> */}

                            <Pressable  onPress={loginPress} style={styles.button} >
                                <Text style={styles.buttonText}>Login</Text>
                            </Pressable>
                            <Text style={styles.labelSignUpP}>
                                Don't have an account?  
                                    <Text onPress={signUp} style={styles.labelSignUpC}> Sign Up</Text>
                                        
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
        
        // backgroundColor:"black",
        justifyContent:"space-evenly"


    },
    label:{
        color:'#A678B8',
        fontFamily:'Poppins-Regular',
        fontSize:10,
        // backgroundColor:"black",

    },
    textInput:{
        color:'#FFF',
        borderBottomWidth:1,
        borderBottomColor:'#A678B8',
        fontSize:14
        

    },
    button:{
        backgroundColor:'#E6E6E6',
        padding:1,
        // borderColor:'#A678B8',
        borderRadius:10,
        // borderWidth:2,
        marginHorizontal:50,
        padding:3
},
    
    buttonText:{
        textAlign:"center",
        fontFamily:'Poppins-Medium',
        fontSize:20,
    },
    
    labellogin:{
        textAlign:"center",
        fontFamily:'Poppins-Regular',



    },
    labelSignUpP:{
        textAlign:"center",
        fontFamily:'Poppins-Regular',
        color:'#20203D',
        
    },
    labelSignUpC:{
        color:'#DF79D8',
        fontFamily:'Poppins-Regular',
        fontWeight:"bold",

    },


 
});



