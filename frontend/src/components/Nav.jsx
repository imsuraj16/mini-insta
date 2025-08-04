import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition duration-200 hover:text-blue-500 ${
      isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'
    }`;

  return (
    <nav className="w-full px-[4rem] py-5 flex items-center justify-between shadow-md bg-white">
      <div className="text-xl font-bold text-blue-600 tracking-wide">
        <NavLink to="/">CaptionCraft</NavLink>
      </div>
      <div className="flex items-center gap-8">
        <NavLink className={navLinkClass} to="/">Home</NavLink>
        <NavLink className={navLinkClass} to="/explore">Explore</NavLink>
        <NavLink className={navLinkClass} to="/about">About</NavLink>
        <NavLink className={navLinkClass} to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
