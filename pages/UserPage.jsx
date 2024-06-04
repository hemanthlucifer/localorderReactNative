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


export default function UserPage() {

  const user = useContext(userNameContext);

  const navigation = useNavigation();

  const [userData,setUserData] = useState('');

  const [profileImage,setprofileImage] = useState('https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.pn');

  const defaultImage = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";
  useEffect(() => {
    const getUserData = async ()=>{
         try{
            const userId = user.userId;
            const userDataFetched = await FetchUserProfile(userId);
            setUserData(userDataFetched);   
            if(userDataFetched.profileImage===null){
              setprofileImage(defaultImage);
            }else{
              setprofileImage(userDataFetched.profileImage);
            }        
         }catch(e){
          Alert.alert(Alerts.SOMETHINGWENTWRONG,Alerts.SOMETHINGWENTWRONGMESS);
         }
    }
    getUserData();
  }, []);

  const pickProfileImage = async () =>{
    let profilePic = await ImagePicker.launchImageLibraryAsync({
      
    });

    if(!profilePic.canceled){
      setprofileImage(profilePic.assets[0].uri);

      const formData = new FormData();
      const data = {
        uri: profilePic.assets[0].uri,
        type: 'image/jpeg',
        name: profilePic.assets[0].fileName
      }
      formData.append('profileImage',data);
      const userName = user.userNameState;
      const accessToken = await SecureStore.getItemAsync('jwtToken');
      try{
        const profileURL = await fetch (`${BaseURL.baseUrl}/user/uploadPic/${userName}`,{
          method:'post',
          body: formData,
          headers:{
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
          }
        })
        setprofileImage(profileURL);
      }catch(e){
        Alert.alert(Alerts.SOMETHINGWENTWRONG,Alerts.SOMETHINGWENTWRONGMESS);
      }
    }
  }

  const removeProfileImage = async () =>{
    setprofileImage(defaultImage);
  }

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' , flexDirection:'column', alignItems:'center'}}>
      <View style={myStyles.userDetailsContainer}>
        <TextInput
          label={"Email"}
          value={userData.userEmail}
          style={myStyles.textInput}
          mode="outlined"
        />
        <TextInput
          label={"user name"}
          value={userData.userName}
          style={myStyles.textInput}
          mode="outlined"
        />
        <TextInput
          label={"Phone"}
          value={userData?.phone?.toString()}
          style={myStyles.textInput}
          mode="outlined"
          keyboardType="numeric"
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
            textColor={"white"}/>
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
