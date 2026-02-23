import { Route, Router, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Recipees from "../pages/Recipees.jsx";
import CreateRecipees from "../pages/CreateRecipees.jsx";
import RecipeeDetails from "../pages/RecipeeDetails.jsx";
import Liked from "../pages/Liked.jsx";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="/recipees" element={<Recipees />} />
      <Route path="/create-recipees" element={<CreateRecipees />} />
      <Route path="/recipe-details/:id" element={<RecipeeDetails />} />
    </Routes>
  );
};

export default MainRoutes;
