import React, { useState } from "react";
import InputField from "./inputField";

function LoginForm() {
    var [state, setState] = useState({
        username : '',
        password : ''
    })

    const setUsername = (username) => setState({...state, username});

    const setPassword = (password) => setState({...state, password});

    const submitForm = (e) => {
        e.preventDefault();
        console.log(state);
    }

    return (
        <form action="#" method="POST" className="loginForm" onSubmit={submitForm}>
            <h1>Login Form</h1>
            <InputField type='text' name='username' id='username' label="Username" updateFunction={setUsername} />
            <InputField type='password' name='password' id='password' label='Password' updateFunction={setPassword} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default LoginForm