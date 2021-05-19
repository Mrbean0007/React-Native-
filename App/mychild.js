import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default class MyChildComponent extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <View>
            <Text>Child Component Integer: {this.props.myInteger}</Text>
        </View>

    }
}