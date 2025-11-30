import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>THIS IS HEADIERR I MEAN NAVBAR SAAR
        <NavLink to={'/about/pajeet'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
    </div>
  )
}

export default Header