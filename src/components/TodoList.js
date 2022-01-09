import React, { useEffect, useState, useRef } from 'react'
import Todo from './Todo'

const LOCAL_STORAGE_KEY = "todoApp.todos"
const TODOS = [{ name: 'ohoie', done: true }, { name: "oaefhoe", done: false }]

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const inputName = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    const name = inputName.current.value
    setTodos((prevTodos) => {
      return [...prevTodos, { name, done: false }]
    })
    inputName.current.value = null
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
