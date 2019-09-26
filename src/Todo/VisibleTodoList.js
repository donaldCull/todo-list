import { connect } from 'react-redux'
import TodoList from "./TodoList";
import {completeTodo, deleteTodo, expandTodo} from "../actions";

const mapStateToProps = state => {
    return {
        todos: state.TodoList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTodoComplete: id => {
            dispatch(completeTodo(id))
        },
        onTodoExpand: id => {
            dispatch(expandTodo(id))
        },
        onTodoDelete: id => {
            dispatch(deleteTodo(id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;