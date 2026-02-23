import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center gap-10 h-15  bg-amber-500">
      <NavLink className={(e) => (e.isActive ? "text-red-500" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/liked"
      >
        Liked
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/recipees"
      >
        Recipees
      </NavLink>
      <NavLink
        className={` ${(e) => (e.isActive ? "text-red-500" : "")} bg-amber-950 p-2 rounded-md hover:bg-amber-900 active:scale-[0.99] active:bg-amber-800  `}
        to="/create-recipees"
      >
        create Recipees
      </NavLink>
    </div>
  );
};

export default Navbar;
