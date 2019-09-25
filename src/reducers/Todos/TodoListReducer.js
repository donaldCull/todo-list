import {TODO_LIST} from "../../actions/constants";

export function TodoListReducer(state = [], action) {
    switch (action.type) {
// todo get todos from some remote storage
        case TODO_LIST.ADD:
            return [
                    ...state,
                    {
                        id: action.id,
                        description: action.description,
                        priority: action.priority,
                        complete: false,
                        expanded: false
                    }
                ];
        case TODO_LIST.COMPLETE:
            return state.map((todo, index) => {
                    if (index === action.id) {
                        return Object.assign({}, todo, {
                            complete: !todo.complete
                        });
                    }
                    return todo
                });
        case TODO_LIST.EXPAND:
            return state.map((todo, index) => {
                if (index === action.id) {
                    return Object.assign({}, todo, {
                        expanded: !todo.expanded
                    });
                }
                return todo
            });
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