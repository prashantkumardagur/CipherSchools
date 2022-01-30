import React from "react";

function AddTask(props) {
    let theInput = React.createRef();

    let changeHandler = (e) =>{
        let code = e.keyCode ?? e.which;
        if(code==13) clickHandler(e);
    }

    let clickHandler = (e) =>{
        props.newTask(theInput.current.value);
        theInput.current.value = '';
        theInput.current.focus();
    }

    return (
        <div className="addTask">
            <input ref={theInput} name="data" type="text" placeholder="Add new task" onKeyUp={changeHandler} autoFocus/>
            <button onClick={clickHandler}>Add task</button>
        </div>
    )
}

export default AddTask;