import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default class Buttons extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <TouchableOpacity onPress={this.props.onPress}>
            <View style={style.button}>
                <Text style={style.buttonText}>{this.props.label}</Text>
            </View>
        </TouchableOpacity>
    }
}

const style=StyleSheet.create({
    button:{
        backgroundColor:'#444',
        padding:10,
        marginTop:10,
    },
    buttonText:{
        color:'#fff',
    },

});