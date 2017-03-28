import * as ActionTypes from "./actionTypes";
import {createAction} from "redux-action";

export const addTodo = createAction(ActionTypes.ADD_TODO);
export const setVisibility = createAction(ActionTypes.SET_VISIBILITY);
export const toggleTodo = createAction(ActionTypes.TOGGLE_TODO);