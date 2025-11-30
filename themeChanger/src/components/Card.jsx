import React, { useState } from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'


function Card() {

   let {dark} = useContext(ThemeContext)

  return (
    <div className={dark ? 'dark' : 'light'} >THIS IS A CARD INSIDE INSIDE INSIDE</div>
  )
}

export default Card