import React, { Component } from "react";
import { connect } from "react-redux";
import { TextField } from "material-ui";
import connection from "./../../connection";

class AddTodoNotYetConnected extends Component {
    constructor() {
        super();

        this.state = {
            textValue: ""
        }
    }
    createTodo = () => {
        if (this.state.textValue !== "") {
            this.props.addTodoAsync({ text: this.state.textValue, completed: false });
            this.setState({ textValue: "" })
        };
    }
    render() {
        const style = {
            textAlign: "center"
        }
        return (
            <div style={style}>
                <TextField
                    value={this.state.textValue}
                    onChange={(evt, newValue) => { this.setState({ textValue: newValue }) }}
                    onKeyPress={evt => evt.key === "Enter" ? this.createTodo() : null}
                    onBlur={this.createTodo}
                    hintText={"Write Todo text here! Then press Enter or Tab"}
                    hintStyle={{ textAlign: "center", width: "100%" }}
                    style={{ width: "100%" }}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
};

const mapDispatchToProps = {
    addTodoAsync: connection.actions.addTodoAsync
};

export const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoNotYetConnected);