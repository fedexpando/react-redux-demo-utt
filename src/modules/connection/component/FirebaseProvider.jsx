import {Component} from "react";
import {connect} from "react-redux";
import todo from "./../../todo";
import {todosRef} from "./../database";

class FirebaseProviderNotYetConnected extends Component{
    componentDidMount(){
        todosRef.once("value")
            .then(snapshot => {
                const val = snapshot.val();
                for(var k in val){
                    const elem = val[k];
                    elem.key = k;
                    this.props.addTodo(elem); 
                }
            });
        todosRef.on("child_added", data => {
            const item = data.val();
            item.key = data.key;
            this.props.addTodo(item);
        });
        todosRef.on("child_changed", data => {
            const item = data.val();
            item.key = data.key;
            this.props.toggleTodo(item.key);
        });
    }

    render(){
        return this.props.children;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
};

const mapDispatchToProps = {
    addTodo : todo.actions.addTodo,
    toggleTodo : todo.actions.toggleTodo
};

export const FirebaseProvider = connect(
    mapStateToProps,
    mapDispatchToProps
)(FirebaseProviderNotYetConnected);