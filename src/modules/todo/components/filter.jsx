import React, { Component } from "react";
import { connect } from "react-redux";
import { RadioButtonGroup, RadioButton } from "material-ui";
import { getVisibilityFilter} from "./../selectors"
import { setVisibility } from "./../actions"

class FilterNotYetConnected extends Component {

    render() {
        const style = {
            radioButton:{
                display: "inline-block",
                width: "100px"
            }
        }
        return (
            <div style={{textAlign:"center"}}>
                <RadioButtonGroup style={{position:"relative",top:"10px", display:"inline-block"}}
                name="visibilityFilters" valueSelected={this.props.visibilityFilter} onChange={(evt, value) => {this.props.setVisibility(value)}}>
                    <RadioButton
                        value="SHOW_ALL"
                        label="Show All"
                        style={style.radioButton}
                    />
                    <RadioButton
                        value="ACTIVE"
                        label="Active"
                        style={style.radioButton}
                    />
                    <RadioButton
                        value="COMPLETED"
                        label="Completed"
                        style={style.radioButton}
                    />
                </RadioButtonGroup>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        visibilityFilter: getVisibilityFilter(state),
    }
};

const mapDispatchToProps = {
    setVisibility
};

export const Filter = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterNotYetConnected);