import { useState } from 'react'

const AddTodo = ({ onSave, editingTodo }) => {
  const [title, setTitle] = useState(editingTodo?.title ?? '')
  const [completed, setCompleted] = useState(editingTodo?.completed ?? false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return

    onSave({ title: trimmedTitle, completed })
    setTitle('')
    setCompleted(false)
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label className="todo-field">
        <span>Enter title</span>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter todo title"
        />
      </label>
      <label className="todo-checkbox">
        <input
          type="checkbox"
          checked={completed}
          onChange={(event) => setCompleted(event.target.checked)}
        />
        <span>Completed</span>
      </label>
      <button className="todo-submit" type="submit">
        {editingTodo ? 'Update todo' : 'Add todo'}
      </button>
    </form>
  )
}

export default AddTodo
