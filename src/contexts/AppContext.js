
import * as React from "react";
import { getContext } from "../SessionStorage";

const AppContext = React.createContext();

const initialState = [
    { id: '0', task: 'Read a book', completed: false },
    { id: '1', task: 'Jog in a playground', completed: true },
    { id: '2', task: 'Write articles', completed: false }
];

const sessionContext = getContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const nextId = state.length;
            return [...state, { id: nextId, task: action.payload.task, completed: false }];

        case "REMOVE_TODO":
            console.log(action.payload.id);
            return state.filter(todo => todo.id != action.payload.id);

        case "TOGGLE_TODO":
            const id = action.payload.id;
            return state.map(todo =>
                todo.id == id ? { ...todo, completed: !todo.completed } : todo
            );

        default: return initialState;
    }
};

function AppContextProvider(props) {
    let [state, dispatch] = React.useReducer(reducer, sessionContext || initialState);
    let value = { state, dispatch };
    return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    );
}

const AppContextConsumer = AppContext.Consumer;
/*
function AppContextConsumer(props) {
    return (
        <AppContext.Consumer >
        
        </AppContext.Consumer>
    );
}
*/

export { AppContext, AppContextProvider, AppContextConsumer };