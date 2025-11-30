import { useState } from "react";
import UserContext from "./UserContext";


let UserContextProvider = ({children})=>{

    const [User, setUser] = useState('default saar')

    return <UserContext.Provider value={{User,setUser}} >
        {children}
    </UserContext.Provider>
}


export default UserContextProvider