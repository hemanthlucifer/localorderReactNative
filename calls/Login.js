import axios from 'axios'
import BaseURL from "../utils/BaseURL";

export const Login = async (email,password) =>{

      console.log("method called");
      const response = await axios.post(`${BaseURL.baseUrl}/user/login`,{
        email,
        password
      })
      console.log(response);
      return response.data;
    
}