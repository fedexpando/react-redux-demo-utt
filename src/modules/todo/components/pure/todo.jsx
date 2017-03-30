import React from "react";
import {ListItem, Checkbox,Divider} from "material-ui";


export const Todo = props => (
    <span>
        <ListItem
            leftCheckbox={
                <Checkbox 
                    checked={props.todo.completed} 
                    onCheck={(evt, b) => {
                            const completed = !props.todo.completed;
                            const todo = Object.assign({}, props.todo , { completed });
                            props.toggle(todo);
                        } 
                    } 
                />
            }
            primaryText={props.todo.text}
        />
        <Divider inset={true} />
    </span>
);

