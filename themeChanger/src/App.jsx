import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Sidebar from './components/Sidebar'
import ThemeContext from './context/ThemeContext'

function App() {

  let [dark,setDark] = useState(true)

  let handleTheme = ()=>{
      setDark(!dark)
      window.document.body.style.backgroundColor = 'red'
      
  }

  return (
    <ThemeContext.Provider value={{dark}}>

    <div className={ dark ? 'dark' : 'light'}>
      <Card></Card>
      <br /><br />
      <Sidebar></Sidebar>
      <br /><br />
      <Card></Card>
      <br /><br />
      <Sidebar></Sidebar>
      <br /><br />
      <Card> <Sidebar></Sidebar> </Card>
      <br /><br />
      <Sidebar></Sidebar>

      <button className={dark ? 'dark' : 'light'} onClick={handleTheme}>SWITCH THEME</button>
    </div>
        </ThemeContext.Provider>
  )
}

export default App