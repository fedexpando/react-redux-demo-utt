import {ListItem, Checkbox} from "material-ui";

class TodoListNotYetConnected extends Component {
    render(){
        return (
             <ListItem
              leftCheckbox={<Checkbox />}
              primaryText=""
              secondaryText="Hangouts video call"
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export const TodoList  = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListNotYetConnected)