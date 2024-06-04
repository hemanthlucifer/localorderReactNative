import React, { useContext,useState } from "react";
import { View, Text } from "react-native";
import userNameContext from "../context/userNameContext";
import axios from "axios";
import BaseURL from "../utils/BaseURL";
import * as SecureStore from 'expo-secure-store';

export const FetchProducts = async (latitude,longitude) => {
  try{
    const token = await SecureStore.getItemAsync('jwtToken');
     const response = await axios.get(`${BaseURL.baseUrlProduct}/getProducts`,{
       params:{
        latitude,
        longitude,
       },
       headers:{
        Authorization: `Bearer ${token}`
       }
     },
      
    );
     return response.data;
  }catch(e){
      throw e;
  }
};
