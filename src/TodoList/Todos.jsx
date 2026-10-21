import { useState } from 'react'
import AddTodo from './AddTodo'
import './todos.css'

const initialTodos = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Build a todo list', completed: true },
  { id: 3, title: 'Practice JavaScript', completed: false },
]

const Todos = () => {
  const [todos, setTodos] = useState(initialTodos)
  const [editingTodo, setEditingTodo] = useState(null)

  const saveTodo = (todo) => {
    if (editingTodo) {
      setTodos((currentTodos) =>
        currentTodos.map((item) => item.id === editingTodo.id ? { ...item, ...todo } : item),
      )
      setEditingTodo(null)
      return
    }

    setTodos((currentTodos) => [...currentTodos, { ...todo, id: Date.now() }])
  }

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
    if (editingTodo?.id === id) setEditingTodo(null)
  }

  return (
    <main className="todo-page">
      <section className="todo-app" aria-label="Todo list">
        <AddTodo key={editingTodo?.id ?? 'new'} onSave={saveTodo} editingTodo={editingTodo} />
        <div className="todo-list">
          <h1>All Todos</h1>
          <div className="todo-items">
            {todos.map((todo) => (
              <article className="todo-item" key={todo.id}>
                <div className="todo-item-info">
                  <span className={`todo-status${todo.completed ? ' is-complete' : ''}`} aria-hidden="true" />
                  <span className={todo.completed ? 'todo-title is-complete' : 'todo-title'}>{todo.title}</span>
                </div>
                <div className="todo-actions">
                  <button className="todo-button update-button" type="button" onClick={() => setEditingTodo(todo)}>
                    Update
                  </button>
                  <button className="todo-button delete-button" type="button" onClick={() => deleteTodo(todo.id)}>
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Todos
