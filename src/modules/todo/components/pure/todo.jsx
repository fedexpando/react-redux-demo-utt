import React, { Component } from "react";
import {ListItem, Checkbox} from "material-ui";

export class Todo extends Component {
    render(){
        return (
             <ListItem
              leftCheckbox={<Checkbox checked={this.props.todo.completed} onCheck={(evt, b) => {this.props.onCheck() } } />}
              primaryText={this.props.todo.text}
            />
        );
    }
}

