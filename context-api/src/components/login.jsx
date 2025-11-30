import {useContext, useState} from 'react'
import userContext from '../context/userContext'

function Login() {

    let [user,setName] = useState('')
    let [password,setPassword] = useState('')

    let {setUser} = useContext(userContext)

function handleSumbit(){

}

  return (
    <div>
        <h2>LOGIN SAAR</h2>
        <input type="text" value={user} onChange={e=>setName(e.target.value)} />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button onSubmit={handleSumbit}></button>
    </div>
  )
}

export default Login