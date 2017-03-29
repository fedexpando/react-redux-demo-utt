import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Paper } from "material-ui";
import { Todo } from "./pure/todo"
import { getTodos, getVisibilityFilter } from "./../selectors";
import connection from "./../../connection";
import MediaQuery from "react-responsive";

class TodoListNotYetConnected extends Component {
    doFilter = (item) => {
        if (this.props.visibilityFilter === "SHOW_ALL") {
            return true;
        }
        if (item.completed && this.props.visibilityFilter === "COMPLETED") {
            return true;
        } else if (!item.completed && this.props.visibilityFilter === "ACTIVE") {
            return true;
        } else {
            return false;
        }
    }
    
    render() {
        return (
            <Paper zDepth={3} style={{padding : "1rem", maxHeight : "calc(100% - 200px)", overflowY:"auto"}}>
                <List>
                    {this.props.todos.filter((item) => this.doFilter(item))
                        .map((item, index) => {
                            return(
                            <Todo key={index} todo={item}
                                onCheck={() => {
                                    let newItem = Object.assign({}, item, { completed: !item.completed })
                                    this.props.toggleTodo(newItem);
                                }} >
                            </Todo>);
                        })
                    }
                </List>
            </Paper>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getTodos(state),
        visibilityFilter: getVisibilityFilter(state)
    }
}

const mapDispatchToProps = {
    toggleTodo: connection.actions.toggleTodoAsync,
};

export const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListNotYetConnected)