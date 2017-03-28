import * as ActionTypes from "./actionTypes";
import {createAction} from "redux-action";
import {wrapPush} from "./../common/connection";

export const addTodo = createAction(ActionTypes.ADD_TODO);
export const setVisibility = createAction(ActionTypes.SET_VISIBILITY);
export const toggleTodo = createAction(ActionTypes.TOGGLE_TODO);
export const addTodoAsync = wrapPush(addTodo);