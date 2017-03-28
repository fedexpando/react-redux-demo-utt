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
    render() {
        return (
            <div onBlur={() => { 
                if(this.state.textValue !== ""){
                    this.props.addTodoAsync({ text: this.state.textValue, completed: false }); 
                    this.setState({textValue: ""}) };
                } 
                }>
                <TextField id="todo-textFile" value={this.state.textValue}
                    onChange={(evt, newValue) => { this.setState({ textValue: newValue }) }} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
};

const mapDispatchToProps = {
    addTodoAsync : connection.actions.addTodoAsync
};

export const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoNotYetConnected);