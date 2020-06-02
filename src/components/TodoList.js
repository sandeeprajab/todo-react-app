import React, { useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';
import ToDo from "./ToDo";
import TodoAdd from './TodoAdd';
import { saveContext, removeContext } from "../SessionStorage";

function TodoList() {
    const { state, dispatch } = React.useContext(AppContext);
    useEffect(() => {
        saveContext(state);
    }, [state]);
    console.log("todos:", state);

    const completeTodo = index => {
        dispatch({ type: "TOGGLE_TODO", payload: { id: index } });
    };

    const deleteTodo = index => {
        dispatch({ type: "REMOVE_TODO", payload: { id: index } });
    };

    return (
        <>
        <button onClick={() => removeContext()}>Clear Session</button>
        <div className="app">
           
            <div className="card-content">
                {state.map((todo, index) => (
                    <ToDo
                        key={todo.id}
                        todo={todo}
                        completeTodo={completeTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </div>
            <TodoAdd />
        </div>
        </>
    );
}

export default TodoList;