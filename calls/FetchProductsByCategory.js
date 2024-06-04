import axios from "axios";
import BaseURL from "../utils/BaseURL";
import { useContext } from "react";
import userNameContext from "../context/userNameContext";
import * as SecureStore from 'expo-secure-store';

export const FetchProductsByCategory = async (category,city) =>{
    
    try{
        const token =  await SecureStore.getItemAsync('jwtToken');
       const response = await axios.get(`${BaseURL.baseUrlProduct}/getProducts/${category}`,{
        params:{
            userLocation:city
        },
        headers:{
            Authorization: `Bearer ${token}`
        }
       })
       return response.data;
    }catch(e){
        throw(e);
    }
}