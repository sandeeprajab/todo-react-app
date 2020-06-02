import React from 'react';
import './App.css';
//import TodoList from "./components/TodoList";
import TodoApp from './components/TodoApp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          TODO tasks list
      </h1>
      </header>

      <TodoApp />



    </div>
  );
}

export default App;
