import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = props => {
    const { todo } = props;
    return (
        <div className="todo-item">
            <div className="item-header">
                <span className="item-id">#{todo.id}</span>
                <span className="item-priority">{todo.priority}</span>
                <span className="item-complete">{todo.complete ? "✅": "⬛"}</span>
            </div>
            <div className="todo-body">
                <span className="item-description">{todo.description}</span>
            </div>
        </div>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoItem;