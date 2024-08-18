
import './App.css';
import Header from "./components/Header";
import Form from "./components/Form";
import React, {useState,useEffect} from "react";
import TodoList from "./components/TodoList";
const App=() =>{
    const intialState=JSON.parse(localStorage.getItem("todos"))|| [];
    const [input,setInput]=useState("i");
    const [todos,setTodos]=useState(intialState);
    const [editTodo,setEditTodo]=useState(null);
    useEffect(() =>
    {
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]);
  return (
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header/>
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
                <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
            </div>
        </div>

      </div>
  );
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
