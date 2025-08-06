import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/actions/userActions";
import { Link } from "react-router-dom";

const Register = () => {

    const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    dispatch(registerUser(data));
    reset();
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="w-full max-w-sm p-8 rounded-xl border border-gray-700 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create your MiniInsta Account
        </h2>
        <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-5">
          <div>
            <label className="block mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none"
              placeholder="Choose a username"
              {...register("username")}
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none"
              placeholder="Create a password"
              {...register("password")}
            />
          </div>
          <button className="w-full bg-white text-black font-bold py-2 rounded hover:bg-gray-200 transition">
            Register
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
