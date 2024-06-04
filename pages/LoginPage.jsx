import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  ScrollView,
  Alert
} from "react-native";
import AuthenticationButton from "../components/AuthenticationButton";
import userNameContext from "../context/userNameContext";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SecureStore from 'expo-secure-store';
import { Login } from "../calls/Login";
import Alerts from "../utils/Alerts";


export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserNameState,setUserId } = useContext(userNameContext);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [validEmail,setValidEmail] = useState(false);
  const [validPass,setValidPass] = useState(false);

  const storeToken = async (token) => {
    try {
      await SecureStore.setItemAsync('jwtToken',token);
    } catch (error) {
      navigation.navigate("LoginPage");
    }
  };

  const handleSubmit = async () => {
    try {
      const authResponse = await Login(email,password);
      storeToken(authResponse.jwtToken);
      setUserNameState(authResponse.userName);
      setUserId(authResponse.userId);
      navigation.navigate("LocationPage");
    } catch (error) {
      if(error.response.status===403){
        Alert.alert(Alerts.INAVLIDUSER,Alerts.INAVLIDUSERMESS);
      }else{
        Alert.alert(Alerts.SOMETHINGWENTWRONG,Alerts.SOMETHINGWENTWRONGMESS);
      }
      console.log(error);
    }
  };

  const handlePassword = (text) =>{
     
    setPassword(text);
    if(password !== null && password!==" " && password.length>5){
       setValidPass(true);
    }else{
      setValidPass(false);
    }

  }

  const handlePhone = (text) =>{

    setEmail(text);
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if(regex.test(email)){
      setValidEmail(true);
    }else{
      setValidEmail(false);
    }

  }
  return (
    <SafeAreaView style={myStyles.container}>
      <ScrollView>
        <View style={myStyles.formWrapper}>
          <TextInput
            style={myStyles.textInput}
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={(text) => {
              handlePhone(text);
            }}
            value={email}
          />

          <TextInput
            style={myStyles.textInput}
            placeholder="password"
            placeholderTextColor="black"
            onChangeText={(text) => {
              handlePassword(text)
            }}
            value={password}
            secureTextEntry
          />
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Registration");
              }}
            >
              <Text>New user ? click here to register...!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={myStyles.buttonContainer}>
          <View style={{marginVertical:15}}>
          <AuthenticationButton
            onPress={handleSubmit}
            title="Login..!"
            disabled={!(validEmail&&validPass)}
            buttonColor={!(validEmail&&validPass) ? "grey" : "black"}
          />
          </View>
        </View>
        
      </ScrollView>
      
    </SafeAreaView>
  );
}
const height = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
  },
  formWrapper: {
    flexDirection: "column",
    marginTop: height * 0.28,
    width: screenWidth * 0.9,
  },
  textInput: {
    borderWidth: 2,
    padding: 10,
    borderTopColor: "#fff",
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
    marginVertical: 30,
    width: "100%",
  },

  buttonContainer: {
    marginVertical: 30,
  },
});
