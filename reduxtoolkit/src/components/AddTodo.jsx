import React, { useState} from 'react'
import { addTodo } from '../features/todoSlice/todoSlice'
import { useDispatch } from 'react-redux';



function AddTodo() {

  let [input,setInput] = useState('')
  const dispatch = useDispatch()

  const handleClick = ()=>{
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <div>
      <input type="text" value={input} onChange={e=>setInput(e.target.value)} />
      <button onClick={handleClick}>ADD</button>
    </div>
  )
}

export default AddTodo