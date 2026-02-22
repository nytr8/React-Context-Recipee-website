import { Route, Router, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Recipees from "../pages/Recipees.jsx";
import CreateRecipees from "../pages/CreateRecipees.jsx";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipees" element={<Recipees />} />
      <Route path="/create-recipees" element={<CreateRecipees />} />
    </Routes>
  );
};

export default MainRoutes;
