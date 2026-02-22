import { createContext, useState } from "react";

export const RecipeDataContext = createContext();
const RecipeeContext = ({ children }) => {
  const [data, setdata] = useState([]);
  const [id, setId] = useState(null);
  return (
    <div>
      <RecipeDataContext.Provider value={{ data, setdata, id, setId }}>
        {children}
      </RecipeDataContext.Provider>
    </div>
  );
};

export default RecipeeContext;
