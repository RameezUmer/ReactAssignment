import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodos = (title) =>{

    setTodos((customElements) => {
      return [
        ...customElements,
        {
          id: crypto.randomUUID, title, checked: false
        }
      ]
    })
  }

  const deleteTodo= (_id) => {
    setTodos(customElements => {
      return customElements.filter(todo => todo.id !== _id)
    }
    )
  }

  const toggleTodo = (id, completed) => {
    setTodos(
      currentTodos => {
        return currentTodos.map(todo => {
          if(todo.id === id){
            return {...todo, completed}
          }

          return todo
        })
      }
    )
  }

  return (
    <>
     <TodoForm onSubmit={addTodos}/>
     <TodoList todos={todos} deleteItem={deleteTodo} toggle={toggleTodo}/>

    </>
  )
}

export default App
