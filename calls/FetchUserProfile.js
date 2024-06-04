import axios from 'axios';
import BaseURL from "../utils/BaseURL";
import * as SecureStore from "expo-secure-store";

export const FetchUserProfile = async (userName)=>{
    const token =  await SecureStore.getItemAsync('jwtToken');
    const response = await axios.get(`${BaseURL.baseUrl}/user/getUser/${userName}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    console.log(response.data)
    return response.data;
}