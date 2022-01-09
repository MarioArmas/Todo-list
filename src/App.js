import { useEffect, useState, useRef } from 'react'
import TodoList from "./components/TodoList"
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  const [todos, setTodos] = useState([])
  const inputName = useRef()

  const addTodo = () => {
    const name = inputName.current.value
    setTodos((prevTodos) => {
      return [...prevTodos, { name, done: false, id: uuidv4() }]
    })
    inputName.current.value = null
  }

  const toggleTodo = (id) => {
    const prevTodos = [...todos]
    const todo = prevTodos.find(todo => todo.id === id)
    todo.done = !todo.done
    setTodos(prevTodos)
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
  
  return (
    <div>
      <div>Pendiente</div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={inputName} type='text' placeholder='Add todo'></input>
      <button onClick={addTodo}>Add</button>
      <button>Delete</button>
    </div>
  )
}

export default App;
