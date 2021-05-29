import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {AppRegistry,StyleSheet,Text,TouchableOpacity,View,Pressable,TextInput} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ModalSelector from 'react-native-modal-selector-searchable'


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
    let index = 0;
        const data = [
            { key: index++, section: true, label: 'Category to offer' },
            { key: index++, label: 'Funds' },
            { key: index++, label: 'Medical' },
            { key: index++, label: 'Foods' },
            { key: index++, label: 'Clothes' },
            { key: index++, label: 'Scholarship' },
            // etc...
            // Can also add additional custom keys which are passed to the onChange callback
        ];
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Your Offering</Text>
          </View>

          <View style={styles.dropdown}>
            {/* // Wrapper */}
            <ModalSelector
                    data={data}
                    initValue="Select a category to offer" 
                    supportedOrientations={['landscape']}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(option)=>{ this.setState({textInputValue:option.label})}}>

                    <TextInput
                        style={{borderWidth:10, borderColor:'#ccc', padding:10, height:60 ,borderRadius:10,borderColor:'pink'}}
                        style={styles.dropdownTextInput}
                        editable={false}
                        placeholder="Select a category to offer"
                        value={this.state.textInputValue} 
                        placeholderTextColor="#D3CDDF"
                    />

                </ModalSelector>

          </View>

          <View style={styles.checkbox}>
            <BouncyCheckbox
              size={15}
              fillColor="#CA7D86"
              unfillColor="#FFF"
              iconStyle={{ borderColor: "#554971" }}

              // onPress={(isChecked: boolean) => {}}
            />

            <Text style={styles.checkText}>Select if not in Category</Text>
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

          <Pressable style={styles.button} >
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
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
    paddingBottom:30
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
  dropdown: {
    borderWidth: 1,
    borderColor: "#A678B8",
    margin: 20,
    // fontFamily:'BerkshireSwash-Regular'
  },

  dropdownTextInput:{
    color: "#FFF",
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    paddingLeft:5
  },
  checkbox: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
  },
  checkText: {
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
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    margin: 20,
  },
});
