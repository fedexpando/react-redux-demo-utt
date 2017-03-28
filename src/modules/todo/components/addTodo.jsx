import React, { Component } from "react";
import { connect } from "react-redux";
import { TextField } from "material-ui";
import { addTodo } from "./../actions"

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
                    this.props.addTodo({ text: this.state.textValue, completed: false }); 
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
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addTodo: (wea) => { dispatch(addTodo(wea))},
    }
}

export const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoNotYetConnected)