import React, { Component } from "react";
import {ListItem, Checkbox,Divider} from "material-ui";

export class Todo extends Component {
    render(){
        return (
            <span>
                <ListItem
                leftCheckbox={<Checkbox checked={this.props.todo.completed} onCheck={(evt, b) => {this.props.onCheck() } } />}
                primaryText={this.props.todo.text}
                />
                <Divider inset={true} />
            </span>
        );
    }
}

