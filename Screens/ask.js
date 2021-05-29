import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Button, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import BouncyCheckbox from "react-native-bouncy-checkbox";




export default class OfferScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedLanguage:null,
      setSelectedLanguage:null,
      toggleCheckBox:false, 
      setToggleCheckBox:false,
    }
  }
 
  render() {
    return (
    
      <View style={styles.container}>  
        <View style={styles.form}>
          <Text >Your Asking</Text>
          <Text>Select the Category to Offering</Text>

         

          
          {/* <Picker style={styles.picker}
          selectedValue={this.state.selectedLanguage} >
          {/* onValueChange={(itemValue, itemIndex) =>setSelectedLanguage(itemValue)} 

          <Picker.Item label="Select Category" value="na" />
          <Picker.Item label="Funds" value="Funds" />
          <Picker.Item label="Foods" value="Foods" />
          <Picker.Item label="Medical" value="Medical" />
          <Picker.Item label="Clothes" value="Clothes" />
          <Picker.Item label="Scholarship" value="Scholarship" />
          </Picker> */}
          

          <View style={styles.checkbox}>
            <BouncyCheckbox size={15}
              fillColor="#CA7D86"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "#554971" }}
              
              // onPress={(isChecked: boolean) => {}}
            />

              <Text>Select if not in Category</Text>
          </View> 

          <TextInput style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Keyword"
            />

          <Text>Your Location</Text>

          <TextInput style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Location"
            />
          <Text>Your Mobile Number</Text>

          <TextInput style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Mobile Number"
              keyboardType="numeric"
            />
          <Text>Zipcode</Text>

          <TextInput style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Zipcode"
              keyboardType="numeric"
            />
        </View> 
      </View>  
      );
    }
}
const styles=StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#36213E', 
      alignItems:'center'
  },
  form: {
    flex:1,
    backgroundColor:'#554971',
    width:350,
    padding:20,
    marginTop:50,
    marginBottom:50,

  },
  picker:{
    flex:.1,
    alignItems:'center',
    justifyContent:'space-around',
    borderWidth: 1,

    
  },
  checkbox:{
    flexDirection:'row',
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding:5,
    
  }
});