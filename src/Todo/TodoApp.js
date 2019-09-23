import React, {Component} from 'react';
import TodoList from "./TodoList";
import { connect } from "react-redux";

class TodoApp extends Component {
    render() {
        return (
            <div className="app">
                <div className="todo-app">
                    <h1>Todo List</h1>
                    <TodoList todos={this.props.todos}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.TodoList.todos
});

// const mapDispatchToProps = dispatch => ({
//
// });

export default connect(mapStateToProps)(TodoApp);