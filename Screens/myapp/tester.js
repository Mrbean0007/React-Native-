import { StatusBar } from 'expo-status-bar';
import React, { Component,useState} from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Button ,Pressable } from 'react-native';
import 'react-native-gesture-handler';

// const client_id=VsgF9dIoUGUQ8ilPN2xcLT0x6w3bpTzOvII36PV0hEs

// https://api.unsplash.com/photos/random?query=pizza&client_id=VsgF9dIoUGUQ8ilPN2xcLT0x6w3bpTzOvII36PV0hEs`

const Catgories ={
  randomImage:'https://api.unsplash.com/photos/random?query=pizza&client_id=lYaES6JCEg4hy-rfxfGJAZZdEpNZApGlOGKXiGoz7mE',
  pizza:'https://api.unsplash.com/search/photos?query=pizza&client_id=lYaES6JCEg4hy-rfxfGJAZZdEpNZApGlOGKXiGoz7mE',
  animal:'https://api.unsplash.com/search/photos?query=animal&client_id=lYaES6JCEg4hy-rfxfGJAZZdEpNZApGlOGKXiGoz7mE',
  animal:'https://api.unsplash.com/search/photos?query=pizza&client_id=lYaES6JCEg4hy-rfxfGJAZZdEpNZApGlOGKXiGoz7mE',
}

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    
    this.state={
      pizzaImage:null,
      discription:null,
    }
  }
  componentDidMount() {
    fetch(Catgories.pizza)
        .then(res=> res.json())
        .then(data => this.setState({pizzaImage:data.results[0].urls.regular,discription:data.results[0].alt_description}))
        ;


  };

  render() {
    
    const image =() =>{ 
      this.props.navigation.navigate('Detail',{ randomImage:Catgories.randomImage,message:'Beautiful Image' })
    }    
    const pizza =() =>{
      const { pizzaImage } =this.state;
      const { discription } =this.state;
      console.log(pizzaImage)
      
      this.props.navigation.navigate('Detail',{ randomImage: pizzaImage, message: discription })
    
    }
    
    

    return (
        <View style={style.container}>
          <Text>Home Screen</Text>
          <Pressable onPress={image}>
            <Text>Random Image</Text>
          </Pressable>
          <Pressable onPress={pizza}>
            <Text>Food</Text>
          </Pressable>
        
        </View>
    );
  }
} 

const style=StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#F5FCFF',
  },

});
    // {itemId:86,otherParam:'anything'}
    