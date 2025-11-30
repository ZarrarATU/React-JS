import React from 'react'
import { useSelector } from 'react-redux';


function todoList() {

  let todos = useSelector(state => state.todos)

  return (
    <div>{todos.map(todo=>todo.text)}</div>
  )
}

export default todoList