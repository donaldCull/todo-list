import React from 'react';
import PropTypes from 'prop-types';
import {TODO_PRIORITY} from "./TodoConstants";

const TodoItem = ({title, priority, complete, onTodoComplete, onTodoExpand, onTodoDelete, description, expanded}) => (
    <div className="todo-item">
        <div className="item-header">
            <span className="item-title">{title}</span>
            <span className="item-priority">{emojiPriorityConverter(priority)}</span>
            <span onClick={onTodoComplete} className="item-complete">{complete ? "✅" : "⬛"}</span>
        </div>
        <div className={expanded ? "item-body expanded" : "item-body"}>
            {expanded &&
            <div className="body-expanded">
                <span className="item-title">Title: {title}</span>
                <span className="item-priority">Priority: {priority}</span>
                <span className="item-description">Description: {description}</span>
                <div className="button-group">
                    <button className="delete-todo" onClick={onTodoDelete}>Delete</button>
                    <span role="img" aria-label="expand" className="expand-indicator"
                          onClick={onTodoExpand}>👇</span>
                </div>
            </div>
            }
            {!expanded &&
            <div className="body-unexpanded">
                <span className="item-description">{description}</span>
                <span role="img" aria-label="expand" className="expand-indicator" onClick={onTodoExpand}>👆</span>
            </div>
            }
        </div>
    </div>
);

const emojiPriorityConverter = priority => {
    let emoji;
    switch (priority) {
        case TODO_PRIORITY.LOW:
            emoji = "😎";
            break;
        case TODO_PRIORITY.MEDIUM:
            emoji = "❗";
            break;
        case TODO_PRIORITY.HIGH:
            emoji = "🔥🔥🔥";
            break;
        default:
            emoji = "⁉";
            break;
    }
    return emoji;
};

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    priority: PropTypes.string.isRequired,
    onTodoComplete: PropTypes.func.isRequired,
    onTodoExpand: PropTypes.func.isRequired,
    onTodoDelete: PropTypes.func.isRequired,
    complete: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    expanded: PropTypes.bool.isRequired
};

export default TodoItem;