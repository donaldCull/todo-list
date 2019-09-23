import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList = props => {
    return (
        <div className="todo-list">
            <AddTodo />
            {props.todos.map((todo, index) => {
                return <TodoItem key={index} todo={todo}/>
            })}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

export default TodoList;