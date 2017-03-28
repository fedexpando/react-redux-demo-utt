import {todosRef, getTodoItemRef} from "./database";

export const addTodoAsync = item => dispatch => {
    todosRef.push(item);
};

export const toggleTodoAsync = item => dispatch => {
    getTodoItemRef(item.key).set(item);
};