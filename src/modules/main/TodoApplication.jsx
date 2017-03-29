import React from "react";
import commonComponents from "./../common/components";
import todoComponents from "./../todo/components";

const AppTitle = commonComponents.AppTitle;
const AppMainDiv = commonComponents.AppMainDiv;
const Filter = todoComponents.Filter;
const TodoList = todoComponents.TodoList;
const AddTodo = todoComponents.AddTodo;

export const TodoApplication = props => (
    <AppMainDiv>
        <AppTitle/>
        <AddTodo/>
        <Filter/>
        <TodoList/>
    </AppMainDiv>
);