import React from 'react';

function Todo({todo, onUpdate, onDelete}) {
    return (
        <li>
            <input type="checkbox"/>
            <label htmlFor='checkbox'>{todo.text}</label>
            <button></button>
        </li>
    );
}

export default Todo;