import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Paper } from "material-ui";
import { Todo } from "./pure/todo"
import { getTodos, getVisibilityFilter } from "./../selectors";
import { AddTodo } from "./addTodo"
import { Filter } from "./filter"
import connection from "./../../connection";

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
        const style = {
            mainDiv:{
                position:"fixed",
                left: "50%",
                transform: "translate(-50%, 0%)",
                height : "100%"
            },
            title: {
                fontSize: 36,
                height : "64px",
                lineHeight : "64px"
            }
        }
        return (
            <div style={style.mainDiv}>
                <span style={style.title}> COOL UNDER THE TREE TODO LIST</span>
                <AddTodo />
                <Filter />
                <Paper zDepth={3} style={{padding : "1rem", maxHeight : "calc(100% - 124px)", overflowY:"auto"}}>
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
            </div>
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