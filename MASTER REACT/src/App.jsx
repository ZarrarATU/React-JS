import { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import './App.css'

function App() {

  let id = 1
  let count = useRef(0)
  let [show,setShow]=useState()

  let videoData = [
    {name: 'DUCKY BHAII', id: id++ },
    {name: 'MAAZ SAFDER BLOOG SAAR', id: id++ },
    {name: 'PHULL SAPPART SAR', id: id++ },
  ]

  const reducer = (state,action)=>{
     switch (action.type) {
      case 'ADD':
           return [...state,{name: 'new added',id: id++}]
        break;
      case 'Remove':
            return state.slice(0, -1);
        break;
      case 'DELETE':
            return state.filter(vid=> vid.id !== action.payload );
        break;
        default : return state;
    
     }
  }

  let [video,dispatch] = useReducer(reducer,videoData);

  useEffect(()=>{
    console.log('wdwd');

   return  ()=>{
    return  console.log('unmouted');
    }
    
  },[])


  function fib(n){
    if(n=== 1 || n=== 2){return 1} 
    return fib(n-1) + fib(n-2)
  }


  let memoFib = useMemo(()=> fib(n),[])


  

    
 
  

  

  return (
    <div>
      VIDEOS:
      <div>
            {video.map((vid,i)=> (
                <div key={i}>
                  <p>{vid.name}</p>
                  <button onClick={e=>setShow(memoFib(40))} >Delete</button>
                </div>
            ))}
      </div>
      <button onClick={e=>{
        count.current = count.current+ 1
         console.log(count.current);
         
       return dispatch({type: 'ADD'})}}>ADD</button>
      <button onClick={e=>dispatch({type: 'Remove'})}>{show}</button>
    </div>
  )
}

export default App
