import React, { useState, useRef } from 'react'
import Todo from './Todo'

export default function TodoList() {
  const [todos, setTodos] = useState([{ name: 'ohoie', done: true }, { name: "oaefhoe", done: false }])
  const inputName = useRef()

  const addTodo = () => {
    const name = inputName.current.value
    setTodos((prevTodos) => {
      return [...prevTodos, { name, done: false }]
    })
  }

  return (
    <div>
      <div>Pendiente</div>
      {
        todos.map((todo) => <Todo name={todo.name} done={todo.done} key={todo.name} />)
      }
      <input ref={inputName} type='text' placeholder='Add todo'></input>
      <button onClick={addTodo}>Add</button>
      <button>Delete</button>
    </div>
  )
}
