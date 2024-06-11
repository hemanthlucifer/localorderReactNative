import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Alert, ImageBackground, Dimensions } from "react-native";
import AddPictureButton from "../components/AddPictureButton";
import RemovePictureButton from "../components/RemovePictureButton";
import { TextInput } from "react-native-paper";
import NormalUseButton from "../components/NormalUseButton";
import axios from "axios";
import BaseURL from "../utils/BaseURL"
import userNameContext from "../context/userNameContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { FetchUserProfile } from "../calls/FetchUserProfile";
import * as SecureStore from "expo-secure-store"
import Alerts from "../utils/Alerts";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { UpdateProfile } from "../calls/UpdateProfile";


export default function UserPage() {

  const user = useContext(userNameContext);

  const navigation = useNavigation();

  

  const [userName, setUserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isValidEmail,setValidEmail] = useState(false);
  const [isValidUsername,setValidUsername] = useState(false);
  const [isValidPhone,setValidPhone] = useState(false);
  const [isValidPass,setValidPass] = useState(false);

  const setUserData = (userData)=>{
     setUserName(userData.userName);
     setEmail(userData.userEmail);
     setPhone(userData.phone);
  }


  const defaultImage = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";
  useEffect(() => {
    const getUserData = async ()=>{
         try{
            const userId = user.userId;
            const userDataFetched = await FetchUserProfile(userId);
            setUserData(userDataFetched);        
         }catch(e){
          Alert.alert(Alerts.SOMETHINGWENTWRONG,Alerts.SOMETHINGWENTWRONGMESS);
         }
    }
    getUserData();
  }, []);


  const logout = async()=>{
      try{
        SecureStore.deleteItemAsync("jwtToken");
        Alert.alert(Alerts.LOGOUTSUCCESS,Alerts.LOGOUTSUCESSMESS);
        navigation.navigate("LoginPage");
      }catch(e){
        console.log(e);
        Alert.alert(Alerts.UNABLETOLOGOUT,Alerts.UNABLETOLOGOUTMESS);
      }
  }

  const updateProfile = async()=>{
    try{
      const updatedProfile = await UpdateProfile(userEmail,userName,phone);
      setUserData(updatedProfile);
      user.setUserNameState(updatedProfile.userName);
      Alert.alert(Alerts.UPDATEPROFILESUCCESS,Alerts.UPDATEPROFILESUCCESSMESS);
    }catch(e){
      console.log(e);
      Alert.alert(Alerts.UNABLETOUPDATEPROFILE,Alerts.UNABLETOUPDATEPROFILEMESS);
    }
  }

  const validateEmail = (text)=>{
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    setEmail(text);
    if(regex.test(text)){
      setValidEmail(true);
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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' , flexDirection:'column', alignItems:'center'}}>
      <View style={myStyles.userDetailsContainer}>
        <TextInput
          label={"Email"}
          value={userEmail}
          style={myStyles.textInput}
          mode="outlined"
          onChangeText={(text)=>{
            validateEmail(text);
          }}
        />
        <TextInput
          label={"user name"}
          value={userName}
          style={myStyles.textInput}
          mode="outlined"
          onChangeText={(text)=>{
            validateUsername(text);
          }}
        />
        <TextInput
          label={"Phone"}
          value={phone?.toString()}
          style={myStyles.textInput}
          mode="outlined"
          keyboardType="numeric"
          onChangeText={(text)=>{
            validatePhone(text);
          }}
        />
        <TextInput
          label={"City"}
          value={user.city}
          style={myStyles.textInput}
          mode="outlined"
          disabled= {true}
        />
        <TextInput
          label={"Country"}
          value={user.country}
          style={myStyles.textInput}
          mode="outlined"
          disabled= {true}
        />
        <View style={{marginVertical:10}}>
            <NormalUseButton 
            title={"Update Profile"} 
            buttonWidth={screenWidth*0.9}
            borderColor={"black"}
            backgroundColor={"black"}
            textColor={"white"}
            onPress={updateProfile}
            />
        </View>
        <View>
            <NormalUseButton 
            title={"Logout"} 
            buttonWidth={screenWidth*0.9}
            backgroundColor={"white"}
            borderColor={"red"}
            borderWidth={2}
            textColor={"red"}
            onPress={logout}
            />
        </View>
      </View>
    </SafeAreaView>
  );
}
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const myStyles = StyleSheet.create({
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: 'black',
  },
  profilePicContainer: {
    padding:20,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor:"#372929"
  },
  userNameContainer: {},
  userName: {
    fontSize: 50,
    fontStyle: "italic",
    textAlign: "center",
  },
  profilePicButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor:'black',
    padding: 5
  },
  userDetailsContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 15
  },
  textInput: {
    width: screenWidth*0.9,
    marginVertical: 20,
    backgroundColor:'#fff'
  },
  backgroundImage:{
    width: screenWidth,
    padding: 10,
    flexDirection:'column',
    alignItems:'center'
  }
});
