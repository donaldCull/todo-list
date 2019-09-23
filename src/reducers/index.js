import {combineReducers} from "redux";
import {TodoListReducer} from "./Todos/TodoListReducer";

export default combineReducers({
    TodoList: TodoListReducer
})