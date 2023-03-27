import React from 'react'

const TodosList = ({todos, setTodos}) => {
  return (
    
    <div>
        {/* now we map the todolist to listout the items */}
        {todos.map((todo)=>(
            <li className='todo-list' key={todo.id}>
                <input type="text" value={todo.title} className="list" onChange={(event) => event.preventDefault()}/>

            </li>
        ))}
    </div>
  )
}

export default TodosList