import React from "react";
import MediaQuery from "react-responsive";

export const AppMainDiv = props => {
    const commonStyle = {
        width:"100%", 
        height: "100%", 
        position: "fixed"
    }
    return (
        <div style={{width:"100%", height: "100%"}}>
            <MediaQuery query="(min-device-width: 1200px)">
                <div style={Object.assign({},commonStyle,{
                    width:"50%",
                    paddingLeft:"25%"
                })}>
                    {props.children}
                </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 1200px)">
                <div style={Object.assign({},commonStyle,{padding: "1rem"})}>
                    {props.children}
                </div>
            </MediaQuery>
        </div>
    );
}