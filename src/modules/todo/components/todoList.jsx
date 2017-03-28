import React, { Component } from "react";
import {connect} from "react-redux";
import {List} from "material-ui";
import { Todo } from "./pure/todo"
import { getTodos } from "./../selectors";
import { toggleTodo } from "./../actions";
import { AddTodo } from "./addTodo"
import connection from "./../../connection";

class TodoListNotYetConnected extends Component {
    render(){
        return (
            <div>
             <AddTodo/>
             <List>
               {this.props.todos.map( (item, index) => {return <Todo key={index} todo={item} onCheck={() => {
                   item.completed =!item.completed;
                   this.props.toggleTodo(item);
                } } ></Todo>})} 
             </List>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
      todos: getTodos(state),
  }
}

const mapDispatchToProps = {
    toggleTodo : connection.actions.toggleTodoAsync
};

export const TodoList  = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListNotYetConnected)