import React from "react";

const RecipeCard = ({ elem, handleRecipe }) => {
  return (
    <div
      id={elem.id}
      onClick={() => {
        handleRecipe(elem.id);
      }}
      className="p-5 h-90 w-60 bg-stone-600 flex flex-col rounded-xl items-center justify-center shrink-0"
    >
      <div className="overflow-hidden rounded-xl h-60">
        <img className="object-cover object-center" src={elem.image} alt="" />
      </div>
      <div className="flex self-start gap-5 py-2">
        <div className="font-bold bg-amber-600 rounded px-2">{elem.name}</div>
        <div className="bg-amber-300 rounded px-2">{elem.recipeeType}</div>
      </div>
      <div>{elem.details}</div>
    </div>
  );
};

export default RecipeCard;
