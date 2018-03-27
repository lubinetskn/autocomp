import React from "react";
import ReactDOM from "react-dom";
import { Div } from "glamorous";

class Widget extends React.Component { 
    constructor(props) { 
        super(props); 
    }

    render() { 
        return (
            
            <svg width="150" height="200">
              <polyline points="0,40 40,40 40,80 80,80 80,120 120,120 120,160 160,160,160 120,100" fill="white" stroke="#D07735" stroke-width="6" />
            </svg>
        ); 
    } 
}


export default Widget;

