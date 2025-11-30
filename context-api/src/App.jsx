import './App.css'
import userContextProvider from './context/userContextProvider'
import ogin from './components/login'
import Profile from './components/profile'

export default function App() {
  return (
    <userContextProvider value='subhan'>
      <Login></Login>
      <Profile></Profile>
      </userContextProvider>
  )
}
