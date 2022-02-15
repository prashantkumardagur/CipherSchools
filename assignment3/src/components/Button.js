import React from "react";

function Button(props){
    return <button className="btn" style={props.style} onClick={props.onClick}>{props.text}</button>
    
}

export default Button;