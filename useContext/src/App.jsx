import { useState } from 'react'
import './App.css'
import { UserProvider } from './context/UserContext'
import useUser from './context/UserContext'


function App() {

  // let {User} = useUser()

  const [User, setUser] = useState('saar i want to take a shoawer')


  let addUser = ()=>{
     setUser('ADDED A NEW USER SAAR PHULL SAPPART SAAR ')
  }

  let removeUser = ()=>{
       setUser('removed the user saar')
  }

  let handleClick  =()=>{
    addUser()
  }

  return (
      <UserProvider value={{User,addUser,removeUser}} >
        <div onClick={handleClick}>
       {User}
        </div>

      </UserProvider>
  )
}

export default App