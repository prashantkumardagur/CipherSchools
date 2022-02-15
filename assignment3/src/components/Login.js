import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Login(props) {
    const { setLoggedIn, setCurrentUser, userList } = props;
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        let currentUser = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        if(!userList.find(user => user.username === currentUser.username && user.password === currentUser.password))
            alert("Wrong username or password");
        else{
            setCurrentUser(currentUser);
            setLoggedIn(true);
            navigate("/");
        }
    }

    return (<>
        <h1>Login</h1>
        <form onSubmit={login}>
            <label for="username">Username</label>
            <input type="text" name="username" id="username" />
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
            <Button text={'Login'} />
        </form>
    </>)
}

export default Login;