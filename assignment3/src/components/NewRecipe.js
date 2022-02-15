import React, {useEffect} from "react";
import {useNavigate} from 'react-router-dom';


function NewRecipe(props) {
    const { currentUser, loggedIn, maxId, setMaxId, recipes, setRecipes } = props;
    const navigate = useNavigate();

    useEffect(() => { if(!loggedIn) navigate('/login'); });

    const addNewRecipe = (e) => {
        e.preventDefault();
        const newRecipe = {
            id: maxId + 1,
            createdBy: currentUser.username,
            date: Date.now(),
            title: document.getElementById('title').value,
            body: document.getElementById('body').value
        };
        setRecipes([...recipes, newRecipe]);
        setMaxId(maxId + 1);
        navigate('/myrecipes');
    };

    return (<>
        <h1>Add new recipe</h1>
        <form onSubmit={addNewRecipe}>
            <label>Title</label>
            <input type="text" name="title" id="title" />
            <label>Body</label>
            <textarea name="body" id="body" style={{height: '150px', resize: 'none'}}></textarea>
            <button className="btn" type="submit">Add recipe</button>
        </form>
    </>)
}

export default NewRecipe;