import React, { Component } from "react";
import { connect } from "react-redux";
import {RaisedButton} from "material-ui";

class TodoNotYetConnected extends Component {
    render(){
        return (
            <RaisedButton
              label={"CHUPITO EL PAME"}
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

export const Todo  = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoNotYetConnected)