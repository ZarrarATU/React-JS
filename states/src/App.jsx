import { useEffect, useState } from "react"
import './App.css'

let App = ()=>{

  let [localTasks,setLocalTasks] = useState(()=> {
    const saved = JSON.parse(localStorage.getItem('tasks'))
    return saved
})
  let [input,setInput] = useState('')

  function handleSubmit(e){
    e.preventDefault();

    setLocalTasks((preTask=>([
      ...preTask,
      {text: input, done: false},
    ])))


    localStorage.setItem('tasks',JSON.stringify(localTasks))
    console.log(localTasks);
    

  }

  function handleChange(e){
    setInput(e.target.value)
  }

  function handleDelete(index){
      setLocalTasks(prev=> prev.filter((_,i)=> i !== index ))

      
  }

  useEffect(()=>{
  // console.log(localTasks)

  setLocalTasks(localTasks)
    
  },[localTasks])

  

  return <>
    <form className="input" onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleChange}  />
      <button type="submit">ADD</button>
    </form>

    <div className="tasks">
   {localTasks.map((task,index)=>{
    return(
    <li key={index}>
      {task.text}
      <button onClick={()=>handleDelete(index)}>DELETE</button>
    </li>
    )
   })}
    </div>
  </>
}

export default App