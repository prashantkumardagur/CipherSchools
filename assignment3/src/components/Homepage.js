import React from "react";

function Homepage(props) {
    return (
        <>
        <h1>View all recipes</h1>
        <main className="recipeList">
            {props.recipes.map(recipe => (
            <article className="recipe" key={recipe.id}>
                <h3>{recipe.title}</h3>
                <span>Created on : {new Date(recipe.date).toDateString()}</span>
                <p>{recipe.body}</p>
            </article>
            ))}
        </main>
        </>
    );
}

export default Homepage;