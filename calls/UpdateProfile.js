import axios from 'axios';
import React from 'react';
import { View, Text } from 'react-native';
import BaseURL from '../utils/BaseURL';
import * as SecureStore from 'expo-secure-store';

export const UpdateProfile = async (userEmail,userName,phone) => {

       const token = await SecureStore.getItemAsync("jwtToken");
       const data = {
        userEmail: userEmail,
        userName: userName,
        phone: phone
       }
       const updatedProfile = await axios.patch(`${BaseURL.baseUrl}/user/updateUser`,
        data,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
       )
       return updatedProfile.data;
  
}


