import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {AppRegistry,StyleSheet,Text,TouchableOpacity,View,Button,TextInput} from "react-native";
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
          <View style={styles.header}>
            <Text style={styles.headerText}>Your Offering</Text>
          </View>


          {/* <Picker style={styles.picker}
            selectedValue={this.state.selectedLanguage} >
            {/* onValueChange={(itemValue, itemIndex) =>setSelectedLanguage(itemValue)} 
            
            <Picker.Item label="Select Category" value="na" />
            <Picker.Item label="Funds" value="Funds" />
            <Picker.Item label="Foods" value="Foods" />
            <Picker.Item label="Medical" value="Medical" />
            <Picker.Item label="Clothes" value="Clothes" />
            <Picker.Item label="Scholarship" value="Scholarship" />
            </Picker> 
          */}

          <View style={styles.checkbox}>
            <BouncyCheckbox
              size={15}
              fillColor="#CA7D86"
              unfillColor="#FFF"
              iconStyle={{ borderColor: "#554971" }}

              // onPress={(isChecked: boolean) => {}}
            />

            <Text style={styles.text}>Select if not in Category</Text>
          </View>

          <TextInput
            style={styles.inputCheck}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Keyword"
            placeholderTextColor="#D3CDDF"
          />

          <TextInput
            style={styles.inputBox}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Location"
            placeholderTextColor="#D3CDDF"
          />

          <TextInput
            style={styles.inputBox}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Mobile Number"
            placeholderTextColor="#FFF"
            placeholderTextColor="#D3CDDF"
            keyboardType="numeric"
          />

          <TextInput
            style={styles.inputBox}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Pincode"
            placeholderTextColor="#D3CDDF"
            keyboardType="numeric"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36213E",
    alignItems: "center",
  },
  form: {
    flex: 2,
    width: 350,
    backgroundColor: "#724583",
    borderRadius: 30,
    marginVertical: "20%",
    padding: 20,
  },
  header: {
    flex: 0.2,
    // backgroundColor:"white",
    // FCFC62
  },
  headerText: {
    fontFamily: "Poppins-Medium",
    fontSize: 30,
    color: "#FFF",
    // color:'#EFABFF',
    // color:'#EA7AF4',
  },
  picker: {
    flex: 0.1,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
    margin: 20,

    // fontFamily:'BerkshireSwash-Regular'
  },
  checkbox: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#D3CDDF",
  },
  inputCheck: {
    color: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#A678B8",
    fontSize: 15,
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20,
  },
  inputBox: {
    color: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#A678B8",
    fontSize: 15,
    margin: 20,
  },
});
