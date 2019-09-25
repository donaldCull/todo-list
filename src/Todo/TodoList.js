import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList = ({ todos, onTodoComplete, onTodoExpand }) => (
        <div className="todo-list">
            <AddTodo />
            {todos.map((todo, index) => (
                <TodoItem key={index} {...todo} onTodoComplete={() => onTodoComplete(index)} onTodoExpand={() => onTodoExpand(index)}/>
            ))}
        </div>
    );

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            priority: PropTypes.string.isRequired,
            complete: PropTypes.bool.isRequired,
            description: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoComplete: PropTypes.func.isRequired,
    onTodoExpand: PropTypes.func.isRequired
};

export default TodoList;