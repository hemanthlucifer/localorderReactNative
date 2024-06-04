import axios from 'axios';
import BaseURL from "../utils/BaseURL";

export const Register = async (userName,password,userEmail,phone) =>{
    
    await axios.post(`${BaseURL.baseUrl}/user/registration`,{
        userName,
        password,
        userEmail,
        phone,
    })

}