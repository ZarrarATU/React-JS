import { createContext, useContext } from "react";

let UserContext = createContext({
    User: 'default USER SAAR',
    addUser: ()=>{},
    removeUser: ()=>{},
})

export let UserProvider = UserContext.Provider

let useUser = ()=>{
    return useContext(UserContext)
}
export default useUser