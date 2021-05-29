import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { AppRegistry,Modal,StyleSheet, Text,  View,  TextInput,Pressable,Image  } from 'react-native';

export default class SignUpScreen extends Component {
  state = {
    modalVisible: false
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
    render() {
      const login =() =>{
        this.props.navigation.navigate('Login')
    }


      const { modalVisible } = this.state;
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
                  

                  
                  <Pressable style={styles.button}  onPress={() => this.setModalVisible(true)} >
                    <Text style={styles.buttonText}>Submit</Text>
                  </Pressable>

                  <Text style={styles.labelSignUpP}>
                    Already have an account?  
                      <Text onPress={login} style={styles.labelSignUpC}> Login</Text>
                  </Text>

                  <View style={styles.centeredView}>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisible}
                      onRequestClose={() => {
                        this.setModalVisible(!modalVisible);
                      }}>
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>OTP Number</Text>
                          

                          <TextInput style={styles.input}
                          // onChangeText={onChangeNumber}
                          // value={number}
                          placeholder="Code"
                          keyboardType="numeric"/>

                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Submit</Text>
                          </Pressable>
                        </View>
                      </View>
                    </Modal>
                  </View>
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

labellogin:{
    textAlign:"center",
    fontFamily:'Poppins-Regular',



},
labelSignUpP:{
    textAlign:"center",
    fontFamily:'Poppins-Regular',
    color:'#20203D',
    paddingTop:10
    
},
labelSignUpC:{
    color:'#DF79D8',
    fontFamily:'Poppins-Regular',
    fontWeight:"bold",

},

});

// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// const HomeScreen = (props) => {
//   return (
//     <View style={styles.container}>
//        <View style={styles.formConatiner}>
//         {/* Parent */}
//        </View>
//        <View style={styles.formInput}>
//           {/* Child */}

//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           autoCapitalize="none"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           autoCapitalize="none"
//           secureTextEntry={true}
//         />
//         </View>

//   </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:'#FFF',
    

    
//   },
//   formConatiner: {
//     flex: 2,
//     backgroundColor: "#48cae4",
//     height : '80%',
//     width : '100%',
//     transform : [ { scaleX : 2 } ],
//     borderBottomStartRadius : 900,
//     borderBottomEndRadius : 300,
//     overflow : 'hidden',
  

//   },
//   formInput:{
//     flex: 2,
//     backgroundColor:'#FFF',
//     justifyContent:"center",
//     paddingHorizontal:50,
    




//   },
//   input: {
//     backgroundColor:'red',
//     margin:10,
//     borderWidth:10,
//     borderRadius:10,
    
    
//   },
//   // formInput:{
//   //   flex:2,
//   //   justifyContent:"center",
//   //   backgroundColor:"black",
//   // },
//   button: {
//     backgroundColor: "#b2f7ef",
//     justifyContent: "space-evenly",
//     padding: 10,
//     margin: 5,
//     width: 70,
//     borderRadius:5,
//   },
// });

// export default HomeScreen;

          

 




