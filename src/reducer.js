import {combineReducers} from "redux";
import todoModule from "./modules/todo";
export const reducer = combineReducers({
    [todoModule.NAME] : todoModule.reducer
});