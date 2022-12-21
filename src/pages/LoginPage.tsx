import React from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="bg-[#030723] my-20 mx-40 bayangan border-black border-2">
      <div className="grid grid-cols-9 bg-transparent">
        <div className="bg-white col-span-5 p-10">
          <hr className="bg-[#030723] border-none h-1 w-10 mb-5 mt-14" />
        </div>
        <div className="bg-[#f2f6fc] col-span-4 p-10">
          <hr className="bg-[#030723] border-none h-1 w-10 mb-5 mt-14" />
          <h1 className="bg-transparent text-2xl">Welcome Back Champ</h1>
          <p className="bg-transparent text-slate-600 my-2">Are you ready to store your passwords safely and neatly today? keep your password secure with Core.</p>
          <LoginForm />
          <p className="bg-transparent text-center">
            Don't have an account?
            <Link to="/register" className="bg-transparent text-center text-[#030723] ml-2">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
