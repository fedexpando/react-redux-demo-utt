import React, { Component } from "react";
import {connect} from "react-redux";
import {List} from "material-ui";
import { Todo } from "./pure/todo"
import { getTodos } from "./../selectors";
import { toggleTodo } from "./../actions";
import { AddTodo } from "./addTodo"

class TodoListNotYetConnected extends Component {
    render(){
        return (
            <div>
             <AddTodo/>
             <List>
               {this.props.todos.map( (item, index) => {return <Todo key={index} todo={item} onCheck={() => {this.props.toggleTodo(item.text)} } ></Todo>})} 
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      toggleTodo: (wea) => {dispatch(toggleTodo(wea))}
  }
}

export const TodoList  = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListNotYetConnected)