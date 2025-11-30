import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Printer() {

    let {User} = useContext(UserContext)


  return (
    <div>{User}</div>
  )
}

export default Printer