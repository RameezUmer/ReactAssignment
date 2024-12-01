import React from "react"

function TodoList({ todos, deleteItem, toggle}) {
  return (
    <>
    <ul>
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return <li key={todo.id}>
        <label>
          <input type="checkbox" checked={todo.checked} onChange={e => toggle(todo.id, e.target.checked)}/>
          {todo.title}
        </label>
        <button
         onClick={() => deleteItem(todo.id)}
         >Delete</button>
      </li>
      })}
      
    </ul>
    </>
  )
}

export default TodoList



// onChange={e => toggleTodo(todo.id, e.target.checked)