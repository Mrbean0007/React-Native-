import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { AppRegistry,Modal,StyleSheet, Text,  View,  TextInput,Pressable  } from 'react-native';

export default class SignUpScreen extends Component {
  state = {
    modalVisible: false
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
    render() {
      const { modalVisible } = this.state;
        return (
          <View style={styles.container}>
          <Text style={{justifyContent:'center',alignItems:"center", color:'#FFF'}}>SignUp</Text>

          
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
              placeholder="confirm password"
              />
          
          <Text style={styles.text}>Confirm Password</Text>

          <TextInput style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="confirm password"
              />
          
          <Text style={styles.text}>Mobile Number</Text>

          <TextInput style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="confirm password"
              keyboardType="numeric"
          />
          
          <Pressable
            onPress={() => this.setModalVisible(true)}
          >

            <Text style={styles.text}>Submit</Text>
          </Pressable>
        
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Otp Number</Text>
              

              <TextInput style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Code"
              keyboardType="numeric"
          />

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        
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
  },

  // Modal

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }







});


          

 




