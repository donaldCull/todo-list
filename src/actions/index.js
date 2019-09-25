import {TODO_LIST} from "./constants";

let nextTodoId = 0;
export const addTodo = (description, priority) => ({
    type: TODO_LIST.ADD,
    id: nextTodoId++,
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