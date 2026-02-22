import { createContext, useState } from "react";

export const RecipeDataContext = createContext();
const RecipeeContext = ({ children }) => {
  const [data, setdata] = useState([]);
  return (
    <div>
      <RecipeDataContext.Provider value={{ data, setdata }}>
        {children}
      </RecipeDataContext.Provider>
    </div>
  );
};

export default RecipeeContext;
