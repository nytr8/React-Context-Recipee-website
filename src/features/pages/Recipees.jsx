import { useContext } from "react";
import { RecipeDataContext } from "../RecipeeContext";
import { useNavigate } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

const Recipees = () => {
  const { data, setId } = useContext(RecipeDataContext);
  const navigate = useNavigate();
  function handleRecipe(id) {
    setId(id);
    navigate("/recipe-details");
  }
  return (
    <div className="flex gap-5 p-10 flex-wrap m-auto">
      {data.map((elem) => {
        return <RecipeCard elem={elem} handleRecipe={handleRecipe} />;
      })}
    </div>
  );
};

export default Recipees;
