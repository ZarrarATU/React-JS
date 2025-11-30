import { createContext, useContext } from "react";

let TaskContext = createContext({
        tasks: [{task: 'buy a new book', id: 1}],
        addTasks: ()=>{},
        editTask: ()=>{},
        deleteTask: ()=>{},
        completeTask: ()=>{},

        

})

export const TaskContextProvider = TaskContext.Provider;

export default function useTask(){
    return useContext(TaskContext)
}

