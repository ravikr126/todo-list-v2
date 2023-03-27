import React,{useState,useEffect} from 'react';
import './App.css';
import Form from "./Form"
import TodoList from "./TodosList"
const App = () =>{

  //store our todolist items in our local storage
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
   //useState hooks for keep traacking what the user input int the todo
   const [input,setInput] =useState("");
  //useState hooks for keep traacking what all the todo in the list
   const [todos,setTodos] =useState(initialState);

   const[editTodo , setEditTodo] = useState(null);

   useEffect(() =>{
    localStorage.setItem("todos" , JSON.stringify(todos));
   }, [todos]);
  return(

    <div className="container">
      <div className="app-wrapper">
        <div>
        <h1> ToDo List</h1>
        </div>

        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>

        <div>
          <TodoList  todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
};

export default App;