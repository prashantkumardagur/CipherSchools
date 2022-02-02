import React from "react";

function InputField(props) {
    
    const changeHandler = (e) => {
        props.updateFunction(e.target.value);
    }

    return (
        <section>
            <label for={props.id}>{props.label}</label><br />
            <input id={props.id} type={props.type} name={props.name} onChange={changeHandler} />
        </section>
    )
}

export default InputField;