import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Form() {

    const [Input, setInput] = useState('')
    let {setUser} = useContext(UserContext)

    let handleSubmit = ()=>{
        setUser(Input)
    }

  return (
    <div>
        <input type="text" value={Input} onChange={e=>setInput(e.target.value)} />
        <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default Form