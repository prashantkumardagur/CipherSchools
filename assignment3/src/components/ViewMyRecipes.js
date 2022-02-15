import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function MyRecipes(props) {
    const { myRecipes, setRecipes, recipes } = props;

    const deleteRecipe = (id) => {
        const newRecipes = recipes.filter(recipe => recipe.id !== id);
        setRecipes(newRecipes);
    }

    return (
        <>
        <Link style={{ margin: "0 auto 30px", display: "block", width: "max-content"}} className="btn" to={'/newrecipe'}>
            Add new recipe
        </Link>
        <main className="recipeList">
            {myRecipes.map(recipe => (
                <article className="recipe" key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <span>Created on : {new Date(recipe.date).toDateString()}</span>
                    <p>{recipe.body}</p>
                    <Button onClick={() => {deleteRecipe(recipe.id)}} style={{marginBottom: '5px'}} text={'Delete'} />
                </article>
            ))}
        </main>
        </>)
}

function ViewMyRecipes(props){
    const { recipes, setRecipes, currentUser, loggedIn} = props;
    var myRecipes = [];

    if(loggedIn){
        myRecipes = recipes.filter(recipe => recipe.createdBy === currentUser.username);
    }


    return (<>
            <h1>My Recipes</h1>
            { loggedIn ?
                <MyRecipes myRecipes={myRecipes} setRecipes={setRecipes} recipes={recipes} /> :
                <p style={{textAlign: 'center'}}>
                    Please login to view your recipes<br/>
                    <Link style={{display: 'inline-block'}} className="btn" to={'/login'}>Login</Link>
                </p>
            }
        </>)
}

export default ViewMyRecipes;