import React from 'react'

export default function Todo({ todo, toggleTodo }) {

  const handleTodoClick = () => toggleTodo(todo.id)

  return (
    <div>
      <input type='checkbox' checked={todo.done} onChange={handleTodoClick}></input>
      {todo.name}
    </div>
  )
}
