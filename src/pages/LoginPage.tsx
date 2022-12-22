import React from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="my-5 mx-5 md:my-7 md:mx-7 xl:my-20 xl:mx-40 bayangan border-black border-2">
      <div className="md:grid md:grid-cols-9 bg-transparent">
        <div className="bg-white md:col-span-5 p-2 md:p-10 display:hidden">
          <hr className="bg-[#030723] border-none h-1 w-10 mb-5 mt-5 md:mt-14" />
          <h1 className="bg-transparent text-4xl font-bold selection:bg-blue-500 selection:text-blue-100">Login.</h1>
        </div>
        <div className="bg-[#f2f6fc] md:col-span-4 p-2 md:p-10">
          <hr className="bg-[#030723] border-none h-1 w-10 mb-5 mt-5 md:mt-14" />
          <h1 className="bg-transparent text-4xl font-bold selection:bg-blue-500 selection:text-blue-100">Welcome Back Champ</h1>
          <p className="bg-transparent text-slate-600 my-2 selection:bg-blue-500 selection:text-blue-100">
            Are you ready to store your passwords <span className="font-bold">safely</span> and <span className="font-bold">neatly</span> today? keep your password secure with Core.
          </p>
          <LoginForm />
          <p className="bg-transparent text-center selection:bg-blue-500 selection:text-blue-100">
            Don't have an account?
            <Link to="/register" className="bg-transparent text-center text-[#030723] ml-2 font-bold hover:text-blue-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
