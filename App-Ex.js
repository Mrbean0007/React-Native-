// https://reactnativecode.com/dynamically-add-remove-component-using-animation/
// https://reactnativecode.com/dynamically-add-render-view-component/


import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Animated, Platform } from 'react-native';
import React, { Component } from "react";
export default class MyApp extends Component
{
    constructor()
    {
        super();
 
        this.state = { 
          
          ViewArray: [], 
 
          Disable_Button: false 
 
        }
 
        
        this.Array_Value_Index = 0;
 
    }
 
    Add_New_View_Function = () =>
    {
 
        let New_Added_View_Value = {Array_Value_Index:this.Array_Value_Index} 
        console.log("New_Added_View_Value:",New_Added_View_Value)
        
 
        this.setState({ Disable_Button: true, ViewArray: [ ...this.state.ViewArray,New_Added_View_Value ] }, 
            () =>
            {
                this.Array_Value_Index = this.Array_Value_Index + 1;
                this.setState({ Disable_Button: false });
            }
        );
        console.log(this.state.ViewArray,'Viewsetstate')
                     
    } 
 
    render()
    {
        console.log('this.state.ViewArray_render',this.state.ViewArray) 
        
        let Render_Animated_View = this.state.ViewArray.map(( item, key ) =>
        {
            console.log('Key:',key," item:",item,'  this.Array_Value_Index:',this.Array_Value_Index)
            console.log(key,this.Array_Value_Index)

            if(( key ) == this.Array_Value_Index)
            {
                console.log('Hey')
                return(
                    
                    <View key = { key } >
                        
                        <Text style = { styles.View_Inside_Text } > This Is Row { item.Array_Value_Index } </Text>
                   
                    </View>
                
              );
            }
            else
            {
                return(
 
                    <View 
                      key = { key } 
                      style = { styles.Animated_View_Style }>
 
                        <Text style = { styles.View_Inside_Text } > This Is Rowsssssss { item.Array_Value_Index } </Text>
 
                    </View>
 
                );
            }
        });
 
        return(
            <View style = { styles.MainContainer }>
 
                <ScrollView>
 
                    <View style = {{ flex: 1, padding: 2 }}>
                    {
                        Render_Animated_View
                    }
                    </View>
 
                </ScrollView>
 
                <TouchableOpacity 
                activeOpacity = { 0.7 } 
                style = { styles.TouchableOpacityStyle } 
                disabled = { this.state.Disable_Button } 
                onPress = {this.Add_New_View_Function }>
                    
                    <Image 
                    source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}} 
                    style = { styles.FloatingButtonStyle }
                    />
                
                </TouchableOpacity>
 
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: 'center',
        paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },
 
    Animated_View_Style:
    {
        height: 60,
        backgroundColor: '#FF9800',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
 
    View_Inside_Text:
    {
        color: '#fff',
        fontSize: 24
    },
 
    TouchableOpacityStyle:{
  
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
    },
 
    FloatingButtonStyle: {
  
      resizeMode: 'contain',
      width: 50,
      height: 50,
    }
});