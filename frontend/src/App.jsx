import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { currentUser } from "./store/actions/userActions";
import { useDispatch } from "react-redux";
import { getAllPosts } from "./store/actions/postActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
    dispatch(getAllPosts())
  }, []);

  return (
    <div className="w-full min-h-screen py-[2rem] bg-black text-white">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
