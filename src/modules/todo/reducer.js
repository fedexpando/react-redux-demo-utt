import { SHOW_ALL, FILTER, TODOS } from "./constants";
import * as ActionTypes from "./actionTypes";

const initialState = {
    [FILTER]: SHOW_ALL,
    [TODOS]: [],
};

const toggleTodo = (todo, text) => {
    if (todo.text === text) {
        return Object.assign({}, todo, { completed: !todo.completed });
    }

    return todo;
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return Object.assign({}, state, { [TODOS]: [...state[TODOS], action.payload] });
        case ActionTypes.SET_VISIBILITY:
            return Object.assign({}, state, { [FILTER]: action.payload });
        case ActionTypes.TOGGLE_TODO:
            return Object.assign({}, state, state[TODOS].map((todo) => {return toggleTodo(todo, action.payload)} ) );
        default:
            return state;
    }
};

