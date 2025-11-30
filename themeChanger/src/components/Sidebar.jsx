import { useState } from "react"
import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"


function Sidebar() {

    let {dark} = useContext(ThemeContext)
    
  return (
    <div className={dark ? 'dark' : 'light'} >THIS IS A NUB SAAR I MEAN SIDEBAR</div>
  )
}

export default Sidebar