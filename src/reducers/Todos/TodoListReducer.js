import { TODO_LIST } from "../../actions/constants";
import {TODO_PRIORITY} from "../../Todo/TodoConstants";

let todoListState = {
    isLoading: false,
    todos: [],
    error: null
};

// todo get todos from some remote storage
export function TodoListReducer(state = todoListState, action) {
    switch (action.type) {
        case TODO_LIST.GET:
            return {
                ...state,
                isLoading: true
            };
        case TODO_LIST.ADD:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        description: action.description,
                        priority: action.priority,
                        completed: false
                    }
                ],
                isLoading: false
            };
        case TODO_LIST.DELETE:
            return {
                ...state,
                isLoading: true
            };
        case TODO_LIST.FOUND:
            return {
                ...state,
                todos: action.payload,
                isLoading: false
            };
        case TODO_LIST.FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
}