import React from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="rounded-xl bg-[#030723] my-20 mx-40 shadow-xl">
      <div className="grid grid-cols-9 bg-transparent">
        <div className="bg-[#7340ec] rounded-l-xl col-span-5 p-10">
          <hr className="bg-[#030723] border-none h-0.5 w-7 mb-5 mt-14" />
        </div>
        <div className="bg-transparent col-span-4 p-10">
          <hr className="bg-[#7340ec] border-none h-0.5 w-7 mb-5 mt-14" />
          <h1 className="bg-transparent text-2xl">Keep Your Password Save</h1>
          <p className="bg-transparent text-slate-600 my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque itaque, vero aliquid doloribus sunt tempore.</p>
          <LoginForm />
          <p className="bg-transparent text-center">
            Don't have an account?
            <Link to="/register" className="bg-transparent text-center text-[#7340ec] ml-2">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
