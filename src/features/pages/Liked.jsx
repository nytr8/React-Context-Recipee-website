import React, { useContext } from "react";
import { RecipeDataContext } from "../RecipeeContext";

const Liked = () => {
  const storedLikedRecipes = JSON.parse(localStorage.getItem("Likes")) || [];
  const storedRecipes = JSON.parse(localStorage.getItem("Recipes")) || [];

  // const storedRecipeesId = console.log(likedRecipesId);
  // Step 1: Get only liked IDs
  const likedIds = storedLikedRecipes
    .filter((item) => item.like === true)
    .map((item) => Number(item.id));

  // Step 2: Match with actual recipes
  const likedRecipes = storedRecipes.filter((recipe) =>
    likedIds.includes(Number(recipe.id)),
  );

  return (
    <div>
      {storedRecipes.length > 0 ? (
        storedRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <p>{recipe.details}</p>
            <p>{recipe.recipeeType}</p>
          </div>
        ))
      ) : (
        <p>No liked recipes found.</p>
      )}
    </div>
  );
};

export default Liked;
