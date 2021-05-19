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
  electronic:'https://api.unsplash.com/search/photos?query=electronic&client_id=lYaES6JCEg4hy-rfxfGJAZZdEpNZApGlOGKXiGoz7mE',
}

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    
    this.state={
      
      imageRandom:null,
      imageDiscription:null,

      pizzaImage:null,
      pizzaDiscription:null,

      animalImage:null,
      animalDiscription:null,
      
      electronicImage:null,
      electronicDiscription:null,
    }
  }
  
  render() {
    
    const images =() =>{
      
        
      const { imageRandom } = this.state;
      const { imageDiscription } = this.state;

      this.props.navigation.navigate('Detail',{ randomImage: imageRandom, message: imageDiscription })
    }

    const pizza =() =>{
      
      fetch(Catgories.pizza)
        .then(res=> res.json())
        .then(data => this.setState({pizzaImage:data.results[0].urls.raw,pizzaDiscription:data.results[0].alt_description}));

      console.log(Catgories.pizza)  
      const { pizzaImage } = this.state;
      const { pizzaDiscription } = this.state;

      this.props.navigation.navigate('Detail',{ randomImage: pizzaImage, message: pizzaDiscription })

    }

    const animals =() =>{
      
      
      const { animalImage } = this.state;
      const { animalDiscription } = this.state;

      this.props.navigation.navigate('Detail',{ randomImage: animalImage, message: animalDiscription })
    
    }
    const electronics =() =>{
      
      
      const { electronicImage }= this.state;
      const { electronicDiscription } = this.state;

      this.props.navigation.navigate('Detail',{ randomImage: electronicImage, message: electronicDiscription })
    
    }
    return (
        <View style={style.container}>
          <Text>Home Screen</Text>
          <Pressable onPress={images}>
            <Text>Random Image</Text>
          </Pressable>
          <Pressable onPress={pizza}>
            <Text>Pizza</Text>
          </Pressable>
          <Pressable onPress={animals}>
            <Text>Animals</Text>
          </Pressable>
          <Pressable onPress={electronics}>
            <Text>Electronics</Text>
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
    