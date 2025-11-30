
import { useReducer, useRef, useState } from 'react'
import './App.css'
import User from './User'

function App() {

  let [name,setName] = useState(['huzaif','Subhan','Mahad'])
  let [ref,setRef] = useState('')

  function handleClick(){
    ref.current = ref.current+ 1

    console.log(ref.current);
    
  }


  return(

    <>
    <div>useEffect</div>
     <User user={name[ref.current]}></User>

     <button onClick={handleClick}>CHANGE</button>
 </>
     

  )
}

export default App
