import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Register(props){
    const {setLoggedIn, setCurrentUser, userList, setUserList} = props;
    const navigate = useNavigate();

    const registerUser = (e) => {
        e.preventDefault();
        let newUser = {
            name: e.target.name.value,
            username: e.target.username.value,
            password: e.target.password.value
        }
        if(userList.find(user => user.username === newUser.username)){
            alert("User already exists");
            return navigate("/");
        }
        setUserList([...userList, newUser]);
        setCurrentUser(newUser);
        setLoggedIn(true);
        navigate("/");
    }

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
                <label for='username'>Username:</label>
                <input type="text" name="username" id="username" />
                <label for='password'>Password:</label>
                <input type="password" name="password" id="password" />
                <Button text="Register" />
            </form>
        </>
    )
}

export default Register;