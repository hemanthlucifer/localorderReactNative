import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import userNameContext from "../context/userNameContext";
import { Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default function AppHeader({onPress}) {

  
  const navigation = useNavigation();
  const user = useContext(userNameContext);
  const address = `${user.city}`+" , "+`${user.state}`+" , "+`${user.country}`;
  return (
    <>
    <View style={myStyles.headerContainer}>
      <View style={myStyles.searchIconContainer}>
      <Ionicons name="search-circle" size={50} color="black" onPress={()=>{navigation.navigate("SearchPage")}}/>
      </View>
      <View style={myStyles.userDetailsContainer}>
        <Text style={myStyles.userFont}>Hi {user.userNameState}</Text>
        <View style={myStyles.addressContainer}>
           <Entypo name="location-pin" size={15} color="black" style={{padding:5}}/>
           <Text style={myStyles.locationFont}>{address}</Text>
        </View>
      </View>
    </View>
    </>
  );
}
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const myStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "darkslategrey",
    height: screenHeight*0.1,
    flexDirection:'row-reverse',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  userDetailsContainer:{
     width:'85%',
     padding:8,
  },
  searchIconContainer:{
  },
  userFont:{
    fontSize:20,
    color:'#fff',
    padding:5
  },
  locationFont:{
    color:'white',
    fontSize:12,
    padding:4
  },
  addressContainer:{
    flexDirection: 'row',
    justifyContent:"flex-start",
  }
});
