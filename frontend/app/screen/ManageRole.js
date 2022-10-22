import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import * as React from "react";
import axios from "axios";
import { Button } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const role = ["Student", "Teacher"];

function manageRole() {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Manage Role</Text>
          <TextInput style={styles.textInput} placeholder="Search" />
        </View>
        <View style={styles.box}>
          <View style={styles.inside}>
            <Text style={styles.text}>63070153@it.kmitl.ac.th</Text>

            <SelectDropdown
              data={role}
              dropdownStyle={styles.dropdown}
              buttonStyle={styles.button}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
          </View>
          <View style={styles.inside}>
            <Text style={styles.text}>E-mail</Text>

            <SelectDropdown
              data={role}
              dropdownStyle={styles.dropdown}
              buttonStyle={styles.button}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
          </View>
        </View>
        
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: "#FFF8EA",
  },

  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    marginTop: 50,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text_header: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 30,
  },
  textInput: {
    height: 50,
    width: 350,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    borderColor: "#FF9A00",
  },
  box: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: 400,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    flexDirection: "column",
    borderColor: "#FF9A00",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,

  },
  dropdown: {
    width: 200,
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  button: {
    width: 120,
    height: 40,
    borderColor: "#FF9A00",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#A8E890",
  },
    inside: {
    flexDirection: "row",
    marginBottom: 10,
    
    },
});
export default manageRole;