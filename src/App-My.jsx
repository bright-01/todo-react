import './App.css';
import TodoList from "./components/todolist/TodoList";
import Header from "./components/header/Header";
import {useState} from "react";

function App() {
    const filters = ['all', 'active', 'completed'];
    const [filter, setFilter] = useState(filters[0]);


  return (
    <>
        <Header filters={filters} filter ={filter} onFilterChange={setFilter}/>
        <TodoList filter={filter}/>
    </>
  );
}

export default App;
