import userContext from "./userContext";
import React, { useState } from 'react'

export default function userContextProvider({children}) {

    let [user,setUser] = useState(null)

  return (
    <userContext.Provider value={{user,setUser}}>
     {children}
    </userContext.Provider>
  )
}

