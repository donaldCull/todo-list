import {TODO_LIST} from "./constants";

let nextTodoId = 0;
export const addTodo = (title, description, priority) => ({
    type: TODO_LIST.ADD,
    id: nextTodoId++,
    title,
    priority,
    description
});

export const completeTodo = id => ({
   type: TODO_LIST.COMPLETE,
    id
});

export const expandTodo = id => ({
    type: TODO_LIST.EXPAND,
    id
});

export const deleteTodo = id => ({
    type: TODO_LIST.DELETE,
    id
});