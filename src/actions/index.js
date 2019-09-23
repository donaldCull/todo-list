import {TODO_LIST} from "./constants";

let nextTodoId = 0;
export const addTodo = (description, priority) => ({
    type: TODO_LIST.ADD,
    id: ++nextTodoId,
    priority,
    description
});