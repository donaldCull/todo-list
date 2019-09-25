import React from 'react';
import VisibleTodoList from "./VisibleTodoList";

const TodoApp = () => (
    <div className="app">
        <div className="todo-app">
            <h1>Todo List</h1>
            <VisibleTodoList />
        </div>
    </div>
);

export default TodoApp;