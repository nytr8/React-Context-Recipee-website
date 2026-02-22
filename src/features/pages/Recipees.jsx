import { useContext } from "react";
import { RecipeDataContext } from "../RecipeeContext";

const Recipees = () => {
  const { data } = useContext(RecipeDataContext);
  console.log(data);
  return (
    <div>
      {data.map((elem) => {
        return (
          <div>
            <div>{elem.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Recipees;
