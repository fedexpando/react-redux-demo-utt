import { TODOS, NAME, FILTER } from "./constants"

export const getTodos = state => state[NAME][TODOS];
export const getVisibilityFilter = state => state[NAME][FILTER];