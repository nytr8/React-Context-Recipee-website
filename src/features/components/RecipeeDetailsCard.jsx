import React from "react";

const RecipeeDetailsCard = ({ recipe }) => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <div className="max-w-4xl mx-auto bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="h-96 w-full overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold">{recipe.name}</h1>

          <span className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-full text-sm">
            {recipe.recipeeType}
          </span>

          <p className="text-zinc-300 leading-relaxed">{recipe.details}</p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg">
              Edit
            </button>
            <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeeDetailsCard;
