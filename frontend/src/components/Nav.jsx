import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full flex items-center justify-between px-[3.1rem]">
      <div>
        <NavLink to='/'>Caption craft</NavLink>
      </div>
      <div className="flex items-center justify-center gap-[3rem]">
        <NavLink to='/explore'>Explore</NavLink>
        <NavLink to='/createpost'>Create Post</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </div>
    </div>
  );
};

export default Nav;
