import { useState } from "react"
import { useContext } from "react"
import LoginContext from "../loginContext/login"

function LoginForm() {

    let [username,setUsername] = useState('')
    let [password,setPassword] = useState('')

    let {setLogin} = useContext(LoginContext)

    let handleLogin = (e)=>{
      e.preventDefault()
    }

  return (
    <form >
        <p>USERNAME: </p>
        <input type="text"
         value={username}
         onChange={e=> setUsername(e.target.value)}
         />
        <p>PASSWORD: </p>
        <input type="password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
         />
        <button onClick={handleLogin}>LOGIN</button>
    </form>
  )
}

export default LoginForm