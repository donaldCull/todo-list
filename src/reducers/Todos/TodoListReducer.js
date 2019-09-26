import {TODO_LIST} from "../../actions/constants";

export function TodoListReducer(state = [], action) {
    switch (action.type) {
        case TODO_LIST.ADD:
            return [
                    ...state,
                    {
                        id: action.id,
                        title: action.title,
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
            let todoList = state.slice();
            todoList.splice(action.id, 1);
            return todoList;
        default:
            return state;
    }
}