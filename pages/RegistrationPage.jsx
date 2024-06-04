import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Dimensions,
  Alert,
} from "react-native";
import AuthenticationButton from "../components/AuthenticationButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Register } from "../calls/Register";
import Alerts from "../utils/Alerts";

export default function RegistrationPage({ navigation }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isValidEmail,setValidEmail] = useState(false);
  const [isValidUsername,setValidUsername] = useState(false);
  const [isValidPhone,setValidPhone] = useState(false);
  const [isValidPass,setValidPass] = useState(false);

  const handleSubmit = async () => {
    try {
      await Register(userName,password,userEmail,phone);
      navigation.navigate("LoginPage");
    } catch (error) {
      Alert.alert(Alerts.SOMETHINGWENTWRONG,Alerts.SOMETHINGWENTWRONGMESS);
    }
  };

  const validateEmail = (text)=>{
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    setEmail(text);
    if(regex.test(text)){
      setValidEmail(true);
    }
  }

  const validatePass = (text) => {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,15}$)/;
    setPassword(text);
    if(regex.test(text)){
      setValidPass(true);
    }

  }

  const validatePhone = (text) =>{
      
     const regex = /^[6-9]\d{9}$/;
     setPhone(text);
     if(regex.test(text)){
      setValidPhone(true);
     }

  }

  const validateUsername =(text) =>{

    const regexUsername = /^[A-Za-z]{4,}$/;
    setUserName(text);
    if(regexUsername.test(text)){
      setValidUsername(true);
    }

  }

  return (
    <SafeAreaView style={myStyles.loginContainer}>
      <ScrollView>
        <View style={myStyles.formWrapper}>
          <TextInput
            style={myStyles.textInput}
            placeholder="user name"
            placeholderTextColor="black"
            onChangeText={(text) => {
              validateUsername(text);
            }}
            value={userName}
          />
          <TextInput
            style={myStyles.textInput}
            placeholder="email"
            placeholderTextColor="black"
            onChangeText={(text) => {
              validateEmail(text);
            }}
            value={userEmail}
          />
          <TextInput
            style={myStyles.textInput}
            placeholder="phone"
            placeholderTextColor="black"
            onChangeText={(text) => {
              validatePhone(text);
            }}
            value={phone}
          />
          <TextInput
            style={myStyles.textInput}
            placeholder="password"
            placeholderTextColor="black"
            onChangeText={(text) => {
              validatePass(text);
            }}
            value={password}
            secureTextEntry
          />
        </View>
      </ScrollView>

      <TouchableHighlight style={myStyles.buttonContainer}>
        <AuthenticationButton onPress={handleSubmit} 
        title="Register..!" 
        buttonColor={!(isValidUsername && isValidEmail && isValidPhone && isValidPass) ? "gray" : "black"}
        disabled={!(isValidUsername && isValidEmail && isValidPhone && isValidPass)}/>
      </TouchableHighlight>
    </SafeAreaView>
  );
}
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const myStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
  formWrapper: {
    width: screenWidth * 0.8,
    marginTop: screenHeight * 0.2,
  },
  textInput: {
    borderWidth: 2,
    width: "100%",
    padding: 10,
    borderTopColor: "#fff",
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
    marginVertical: 30,
  },

  buttonContainer: {
    width: screenWidth * 0.8,
    marginVertical: 30,
  },
});
