import { SHOW_ALL, FILTER, TODOS } from "./constants";
import * as ActionTypes from "./actionTypes";

export const initialState = {
    [FILTER]: SHOW_ALL,
    [TODOS]: [],
};

const toggleTodo = (todo, key) => {
    if (todo.key === key) {
        return Object.assign({}, todo, { completed: !todo.completed });
    }

    return todo;
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return Object.assign({}, state, { [TODOS]: [action.payload, ...state[TODOS]] });
        case ActionTypes.SET_VISIBILITY:
            return Object.assign({}, state, { [FILTER]: action.payload });
        case ActionTypes.TOGGLE_TODO:
            return Object.assign({}, state, { [TODOS]: state[TODOS].map((todo) => { return toggleTodo(todo, action.payload) }) });
        default:
            return state;
    }
};

