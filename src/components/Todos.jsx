import React from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
  return (
    <div>
      Todos
    </div>
  )
}

export default Todos
