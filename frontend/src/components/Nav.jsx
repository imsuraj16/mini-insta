import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../store/actions/userActions";

const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  return (
    <div className="w-full flex items-center justify-between px-[3.1rem]">
      <div>
        <NavLink to="/">Caption craft</NavLink>
      </div>
      <div className="flex items-center justify-center gap-[3rem]">
        <NavLink to="/">Explore</NavLink>
        <NavLink to="/createpost">Create Post</NavLink>
        <NavLink to="/Profile">Profile</NavLink>
        {user ? (
          <NavLink onClick={()=>dispatch(logoutUser())} to='/'>Logout</NavLink>
        ) : (
          <NavLink to='/login'>Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Nav;
