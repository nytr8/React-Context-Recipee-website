import React, { useContext } from "react";
import { RecipeDataContext } from "../RecipeeContext";
import RecipeeDetailsCard from "../components/RecipeeDetailsCard";

const RecipeeDetails = () => {
  const { data, id } = useContext(RecipeDataContext);
  const recipe = data.find((elem) => elem.id === id);
  if (!recipe) {
    return <h2 className="text-center text-xl mt-10">Recipe Not Found</h2>;
  }
  return (
    <>
      <RecipeeDetailsCard recipe={recipe} />
    </>
  );
};

export default RecipeeDetails;
