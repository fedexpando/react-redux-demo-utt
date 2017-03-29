import React from "react";
import MediaQuery from "react-responsive";

export const AppTitle = props => {
    const title = "COOL UNDER THE TREE TODO LIST";
    return (
        <div>
            <MediaQuery query="(min-device-width: 1224px)">
                <span style={{fontSize: 36,height : "64px",lineHeight : "64px", textAlign:"center", width: "100%"}}>{title}</span>
            </MediaQuery>
            <MediaQuery query="(max-width: 1224px)">
                <span style={{fontSize: 18, height : "52px", marginTop: "12px", textAlign:"center", width: "100%"}}>{title}</span>
            </MediaQuery>
        </div>
    );
}