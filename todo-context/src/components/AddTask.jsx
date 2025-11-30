import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import useTask from '../context/Taskcontext'

function AddTask() {

  let [input,setInput] = useState('')

  let {addTasks} = useTask()

  
  let handleChange =(e)=>{
       setInput(e.target.value)
      }

      const handleAdd=()=>{
        addTasks(input)

      }

  return (
    <div className="add-task">
      <input className="addInput" value={input} type="text" onChange={handleChange} placeholder="Enter a task..." />
      <button className="add-btn" onClick={handleAdd}>
        <Plus size={18} />
      </button>
    </div>
  )
}

export default AddTask
