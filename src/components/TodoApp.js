import React from 'react';
import { AppContextProvider } from '../contexts/AppContext';
import TodoList from './TodoList';


function TodoApp() {
    return (
        <AppContextProvider>
            <TodoList />
        </AppContextProvider>
    );
}

export default TodoApp;