import React from 'react';

const ToDo = ({ todo, completeTodo, deleteTodo }) => 
    <div className="todo"
        style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.task}
        <div>
            <button onClick={() => completeTodo(todo.id)}>Complete</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    </div>;

export default ToDo;