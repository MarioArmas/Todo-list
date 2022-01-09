import React, { useEffect, useState, useRef } from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = "todoApp.todos"
const TODOS = [{ name: 'ohoie', done: true }, { name: "oaefhoe", done: false }]

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const inputName = useRef()

  const toggleTodo = (id) => {
    const prevTodos = [...todos]
    const todo = prevTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(prevTodos)
  }

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
      return [...prevTodos, { name, done: false, id: uuidv4() }]
    })
    inputName.current.value = null
  }

  return (
    <div>
      <div>Pendiente</div>
      {
        todos.map((todo) => <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />)
      }
      <input ref={inputName} type='text' placeholder='Add todo'></input>
      <button onClick={addTodo}>Add</button>
      <button>Delete</button>
    </div>
  )
}
