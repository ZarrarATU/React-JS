import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import { Outlet, useNavigate } from 'react-router-dom'
import { LoginProvider } from './loginContext/login'
import { useEffect, useState } from 'react'


function App() {
  
  let [login,setLogin] = useState(false)
  let navigate = useNavigate()


  useEffect(()=>{
        if(!login){
          navigate('login')
        }
        else{
          navigate('home')
        }
  },[])


  return (
    <LoginProvider value={{login,setLogin}}>
      app
       <Outlet></Outlet>
    </LoginProvider>
  )
}

export default App
