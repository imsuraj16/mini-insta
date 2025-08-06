import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginHandler = (data) => {
    dispatch(loginUser(data));
    reset();
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="w-full max-w-sm p-8 rounded-xl border border-gray-700 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to MiniInsta
        </h2>
        <form onSubmit={handleSubmit(loginHandler)} className="space-y-5">
          <div>
            <label className="block mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none"
              placeholder="Enter your username"
              {...register("username")}
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none"
              placeholder="Enter your password"
              {...register("password")}
            />
          </div>
          <button className="w-full bg-white text-black font-bold py-2 rounded hover:bg-gray-200 transition">
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
