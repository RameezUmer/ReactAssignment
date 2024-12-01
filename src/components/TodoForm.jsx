import React, { useState } from 'react'

function TodoForm({ onSubmit}) {

    const [newItem, setNewItem] = useState("");

    const handelSubmit = (e) => {
        e.preventDefault();

        onSubmit(newItem)

        setNewItem("")

    }
  return (
    <form onSubmit={handelSubmit}>
        <label htmlFor='todo'>Add Item : </label>
        <input id='todo' type='text' value={newItem} onChange={(e) =>setNewItem(e.target.value)}></input>
        <button type='submit'>Save </button>
    </form>
  )
}

export default TodoForm