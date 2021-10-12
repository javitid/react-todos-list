import React, { Fragment, useRef, useState } from 'react'
import {v4 as uuid} from 'uuid';
import './App.css';
import { TodoList } from './components/TodoList.jsx'

export function App() {
  const [todos, setTodos] = useState([
    {id: 1, task: 'Task 1', completed: false},
    {id: 2, task: 'Task 2', completed: false},
    {id: 3, task: 'Task 3', completed: false},
  ]);

  const todoTaskRef = useRef();

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;
    if (task === '') return;

    setTodos(prevTodos => {
      return [...prevTodos, {id: uuid.v4(), task, completed: false}];
    })

    todoTaskRef.current.value = null;
  }

  const handleClearAll = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoTaskRef} type="text" placeholder="New task" />
      <button onClick={handleTodoAdd}>Add</button>
      <button onClick={handleClearAll}>Remove</button>

      <div>Te quedan {(todos.filter(todo => !todo.completed)).length} tareas por terminar</div>
    </Fragment>
  );
}