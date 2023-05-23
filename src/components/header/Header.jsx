import React from 'react';
import TodoList from "../todolist/TodoList";

export default function Header({filters, filter, onFilterChange}) {
    return (
        <div>
            <ul>
                {filters.map((value, index) => (
                    <li key={index}>
                    <button onClick={() => onFilterChange(value)}>{value}</button>
                </li>
                ))}
            </ul>
        </div>
    );
}

