import { StatusBar } from 'expo-status-bar';

import React, { Component }  from 'react';
import { useState } from "react";
import { CheckBox, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

class  App extends Component {
    constructor(){
      super();
      this.state={
        check:false,
      }
    }
      checkBoxTest(){
        this.setState({
          check:!this.state.check,
        })


    }
        
    render(){
    return (        
        <View style={styles.container}>
         
        <View style={{ marginTop:80, flexDirection:'row' ,justifyContent:'center',alignItems:'center'}}>
          <View >
          <Image style={styles.tinyLogo}
            source={require('./assets/todo.png') }
          />
          </View>
          <View style={styles.header}>
            <Text style={{color:"#ef476fff" , fontSize:20 , fontWeight:'800' }}>TO DO APP</Text>
            <Text style={{color:'#ef476fff'}}>Keep Your Tasks Organised..</Text>
          </View>
          
          
        </View>

        <View style={styles.creatTask}>
          <TextInput style={styles.addTaskInputbox}/>

          <TouchableOpacity style={styles.addButton}>
            <Text style={{color:'#dff8ebff'}}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewTasks}>
          <View style={styles.taskView}>

          {/* <CheckBox value={this.state.check} onChange={() =>this.checkBoxTest()}  style={styles.checkBox} /> */}
          <BouncyCheckbox  />  

            <Text style={styles.whiteText}>Tasks will show up here...</Text>
            <TouchableOpacity >
          
            <Text style={styles.deletebutton} >x</Text>
            </TouchableOpacity>

          </View>
        </View>  
        
        <StatusBar style="auto" />
        </View>
        );
    }
}
// $green-pigment: #08a045ff;
// $honeydew: #dff8ebff;
// $blue-sapphire: #326273ff;
// $maximum-yellow-red: #ffc15eff;
// $paradise-pink: #ef476fff;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 20,
    backgroundColor: '#326273ff',
    alignItems: 'center',
  },

  tinyLogo:{
    // flex:1,
    width: 70,
    height: 80,
    paddingRight:100,
    alignItems:'center',
  },
  
  header: {
     padding:15,
     backgroundColor:'#FFC15E',
     borderRadius:5,
     alignItems:'center',
     justifyContent:'center'

  },
  creatTask:{
    marginTop: 10,
    //backgroundColor:'black',
    width:'100%',
    padding:10,
    flexDirection: 'row'
  },
  addTaskInputbox:{
    flex: 1,
    height:60,
    backgroundColor:"#dff8ebff",
    fontSize:16,
    paddingLeft:5,
    borderRadius:5,
    borderTopRightRadius:0,
    borderBottomRightRadius:0
  },
  addButton:{
    backgroundColor:'#08a045ff', 
    flex:0.2, 
    justifyContent:'center', 
    alignItems:'center',
    borderTopRightRadius:5,
    borderBottomRightRadius:5
  },
  viewTasks:{
    backgroundColor:'#dff8ebff',
    padding:10,
    //height:100,
    width:'100%'
  },
  taskView:{
    flexDirection: "row",  
    backgroundColor:'#ef476fff',
    padding:10,
    borderRadius:5,
  },
  whiteText:{
    color:'#fafafa',
    fontWeight:'500',
    fontSize:15,
    padding:5,
  },

  checkbox: {

    },
  deletebutton:{
    fontSize: 15,
    color: '#fefae0',
    justifyContent:'flex-end',
    padding:5,
    textAlign:"center"

  },

});
export default App;


// markTaskAsDone = () =>
// {
// this.setState({done : !this.state.done});
// }
// Syntax of setState: this.setState({myKey: 'myValue'});
