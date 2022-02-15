import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
    return (
        <nav className="Nav">
            <h1>Recipe App</h1>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/myrecipes'}>My Recipes</Link></li>
                {props.loggedIn ? (
                <li onClick={props.logout}>Logout</li>
                ) : (<>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/register'}>Register</Link></li>
                </>)}
            </ul>
        </nav>
    )
}

export default Nav;