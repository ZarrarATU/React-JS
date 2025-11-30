import './App.css'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import { TaskContextProvider } from './context/Taskcontext'
import { useEffect, useState } from 'react'

function App() {

  let [tasks,setTasks] = useState( JSON.parse(localStorage.getItem('tasks')) || [])

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])


  let addTasks = (input)=>{
    if(input){
      setTasks(pre=>[...pre,{task: input,id: Date.now(),complete: false}])
    }
      
  }
  
  let deleteTask = (id)=>{
    console.log(id);
    
     setTasks(pre=>pre.filter(task=> task.id !== id))
  }

  const editTask = (id, newText) => {
  setTasks(prev =>
    prev.map(task =>
      task.id === id ? { ...task, task: newText } : task
    )
  );
};

  
  const completeTask = (id)=>{
        setTasks(tasks.map(task=> task.id === id ? {...task, complete: !task.complete} : task))
        console.log(id);
        
  }

  return (
    <TaskContextProvider value={{tasks, addTasks,completeTask,editTask,deleteTask}}>

      <AddTask></AddTask>
      <TaskList></TaskList>

    </TaskContextProvider>
  )
}

export default App
