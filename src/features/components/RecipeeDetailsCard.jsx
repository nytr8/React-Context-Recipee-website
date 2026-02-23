import React, { useContext, useState, useEffect, use } from "react";
import { useParams } from "react-router-dom";
import { RecipeDataContext } from "../RecipeeContext";
import { set } from "react-hook-form";

const RecipeeDetailsCard = () => {
  const storedRecipes = JSON.parse(localStorage.getItem("Recipes")) || [];
  const { data, setdata } = useContext(RecipeDataContext);
  const { id } = useParams();
  const [isLiked, setisLiked] = useState(false);
  const [isEditing, setisEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    recipeeType: "",
    details: "",
  });

  const currentRecipe = data.find(
    (item) => item.id === id || item.id === Number(id),
  );

  // Initialize form when recipe loads
  useEffect(() => {
    if (currentRecipe) {
      setFormData({
        name: currentRecipe.name,
        recipeeType: currentRecipe.recipeeType,
        details: currentRecipe.details,
      });
    }
  }, [currentRecipe]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSave(e) {
    e.preventDefault();

    const updatedRecipes = data.map((item) =>
      item.id === currentRecipe.id ? { ...item, ...formData } : item,
    );

    setdata(updatedRecipes);
    localStorage.setItem("Recipes", JSON.stringify(updatedRecipes));
    setisEditing(false);
  }

  function handleDelete() {
    const filteredData = data.filter((item) => item.id !== currentRecipe.id);

    setdata(filteredData);
    localStorage.setItem("Recipes", JSON.stringify(filteredData));
  }

  function handleLike() {
    const newLikeState = !isLiked;
    setisLiked(newLikeState);

    // Get existing likes array
    const storedLikes = JSON.parse(localStorage.getItem("Likes")) || [];

    // Check if recipe already exists in array
    const existingIndex = storedLikes.findIndex(
      (item) => item.id === currentRecipe.id,
    );

    if (existingIndex !== -1) {
      // Update existing recipe like
      storedLikes[existingIndex].like = newLikeState;
    } else {
      // Add new recipe like
      storedLikes.push({
        id: currentRecipe.id,
        like: newLikeState,
      });
    }

    localStorage.setItem("Likes", JSON.stringify(storedLikes));
  }
  useEffect(() => {
    if (!currentRecipe) return;

    const storedLikes = JSON.parse(localStorage.getItem("Likes")) || [];

    const storedLike = storedLikes.find((item) => item.id === currentRecipe.id);

    if (storedLike) {
      setisLiked(storedLike.like);
    } else {
      setisLiked(false);
    }
  }, [currentRecipe]);

  if (!currentRecipe) {
    return <p className="text-white p-6">Recipe not found</p>;
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <div className="relative max-w-4xl mx-auto bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
        {/* Image */}
        <div
          onClick={handleLike}
          className="right-[2%] text-3xl absolute cursor-pointer"
        >
          {isLiked ? (
            <i className="text-red-500 ri-heart-fill"></i>
          ) : (
            <i className="ri-heart-line"></i>
          )}
        </div>

        <div className="h-96 w-full overflow-hidden">
          <img
            src={currentRecipe.image}
            alt={currentRecipe.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {isEditing ? (
            /* ================= EDIT MODE ================= */
            <form onSubmit={handleSave} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-zinc-400 uppercase">
                  Recipe Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-700 p-2 rounded"
                />
              </div>

              <div className="flex items-center gap-5">
                <label className="text-sm text-zinc-400 uppercase">
                  Select Recipe Type:
                </label>
                <select
                  name="recipeeType"
                  value={formData.recipeeType}
                  onChange={handleChange}
                  className="bg-zinc-700 p-2 rounded"
                >
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-zinc-400 uppercase">
                  Recipe Details
                </label>
                <input
                  type="text"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full bg-zinc-700 p-2 rounded"
                />
              </div>

              <div className="flex gap-5">
                <button
                  type="submit"
                  className="bg-green-600 px-6 py-2 rounded-lg"
                >
                  Save
                </button>

                <button
                  type="button"
                  onClick={() => setisEditing(false)}
                  className="bg-blue-500 px-6 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            /* ================= VIEW MODE ================= */
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{currentRecipe.name}</h1>

              <span className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-full text-sm">
                {currentRecipe.recipeeType}
              </span>

              <p className="text-zinc-300 leading-relaxed">
                {currentRecipe.details}
              </p>

              <div className="flex gap-5 mt-6">
                <button
                  onClick={() => setisEditing(true)}
                  className="bg-green-600 px-6 py-2 rounded-lg"
                >
                  Edit
                </button>

                <button
                  onClick={handleDelete}
                  className="bg-red-600 px-6 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeeDetailsCard;
