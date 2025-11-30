import React, { useContext } from 'react'
import userContext from '../context/userContext'


function Profile() {

  let {user} = useContext(userContext)

  return (
    <div>
        <h1>Profile</h1>

        <div>{user ? user : null}</div>

    </div>
    
  )
}

export default Profile