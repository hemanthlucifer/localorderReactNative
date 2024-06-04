import { createContext, useState } from "react";
import userNameContext from "./userNameContext";

const UserNameState = ({children})=>{

    const [userNameState,setUserNameState] = useState('');

    const[userLatitude,setUserLatitude] = useState(' ');

    const[userLongitude, setUserLongitude] = useState(' ');

    const[city,setCity] = useState('');

    const[state,setState] = useState('');

    const[country,setCountry] = useState('');

    const [userId,setUserId] = useState('');

    const updateUserName = (userName)=>{
         setUserNameState(userName);
    }

    return(
        <userNameContext.Provider value={{userNameState,setUserNameState,
        userLatitude,setUserLatitude,userLongitude,setUserLongitude,city,setCity,country,setCountry,state,setState,
        userId,setUserId}}>
            {children}
        </userNameContext.Provider>
    );

}

export default UserNameState;