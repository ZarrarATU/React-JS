
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  let [length,setLength] = useState(8)
  let [number,setNumber] = useState(false)
  let [char,setChar] = useState(false)
  let [password,setPassword] = useState('n')

  let pRef = useRef(null)

  let fn = ()=>{
    let pass = ''
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let num = '1234567890'
    let charac = '~!@#$%^&*()'

   
    if(number) string += num
    if(char) string += charac

    for(let i = 1; i <= length;i++){
      pass += string[Math.floor(Math.random() * string.length )]
    }


    setPassword(pass)
    console.log(pass);
    
    
  }

  const passwordGenerator = useCallback(fn,[length,number,char,setPassword])



  useEffect(()=>{
    passwordGenerator()
  },[passwordGenerator])





  return (
    <>
    <h1>PASSWORD GENERATOR</h1>
     <input type="text" value={password} readOnly ref={pRef} />
     <button onClick={()=>{
      window.navigator.clipboard.writeText(password)
      
     }}>COPY</button>
     <input type="range" min={8} max={20} value={length} onChange={(e)=>{setLength(e.target.value)}} />
     <p>LENGTH: {length}</p>
     <input type="checkbox" defaultChecked={char} onChange={()=>{setChar(!char)}}  /> char

     <input type="checkbox" defaultChecked={number} onChange={()=>{setNumber(!number)}} /> number
    
     
   

    </>
    
  )
}

export default App
