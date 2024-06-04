import axios from 'axios'
import BaseURL from '../utils/BaseURL'
import * as SecureStore from 'expo-secure-store';

export const FetchProductById = async(productId) =>{

    try{
       const token = await SecureStore.getItemAsync('jwtToken');
       const response = await axios.get(`${BaseURL.baseUrlProduct}/getProduct/${productId}`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
       }
       )
       return response.data;
    }catch(e){
      console.log(e);
    }
}