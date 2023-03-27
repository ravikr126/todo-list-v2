import React,{useState} from 'react';
import './App.css';
import Form from "./Form"
import TodoList from "./TodosList"
const App = () =>{

   //useState hooks for keep traacking what the user input int the todo
   const [input,setInput] =useState("");
  //useState hooks for keep traacking what all the todo in the list
   const [todos,setTodos] =useState([]);
  return(

    <div className="main_div">
      <div className="center_div">
        <div>
        <h1> ToDo List</h1>
        </div>

        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          />
        </div>

        <div>
          <TodoList  todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};

export default App;