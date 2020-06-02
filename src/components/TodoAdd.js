import React from 'react';
import { AppContext } from '../contexts/AppContext';

function TodoAdd() {
    const [value, setValue] = React.useState("");
    const {  dispatch } = React.useContext(AppContext);
    return (
        <div>
            <textarea
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button onClick={() => {dispatch({ type: "ADD_TODO", payload: { task: value } }) }}
                >Add Task</button>
        </div>
    );
}

export default TodoAdd;