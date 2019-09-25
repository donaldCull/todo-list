import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ id, priority, complete, onTodoComplete, onTodoExpand, description, expanded }) => (
        <div className="todo-item">
            <div className="item-header">
                <span className="item-id">#{id}</span>
                <span className="item-priority">{priority}</span>
                <span onClick={onTodoComplete} className="item-complete">{complete ? "✅": "⬛"}</span>
            </div>
            <div onClick={onTodoExpand} className={expanded ? "item-body expanded" : "item-body"}>
                <span className="item-description">{description}</span>
            </div>
        </div>
    );

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    priority: PropTypes.string.isRequired,
    onTodoComplete: PropTypes.func.isRequired,
    onTodoExpand: PropTypes.func.isRequired,
    complete: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    expanded: PropTypes.bool.isRequired
};

export default TodoItem;