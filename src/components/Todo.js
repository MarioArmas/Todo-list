import React from 'react'

export default function Todo({ name, done }) {
  return (
    <div>
      <input type='checkbox' checked={done}></input>
      {name}
    </div>
  )
}
