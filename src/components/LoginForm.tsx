import React from "react";
import { FiAtSign, FiKey } from "react-icons/fi";

const LoginForm = () => {
  return (
    <form className="bg-transparent">
      <div className="email flex items-center justify-center bg-transparent">
        <i className="mr-3 text-xl bg-transparent">
          <FiAtSign />
        </i>
        <input className="w-full border-2 border-[#030723] my-3 h-9 bayangan_field focus:outline-none focus:ring focus:ring-blue-500 p-2 selection:bg-blue-500 selection:text-blue-100" type="email" placeholder="Email" />
      </div>
      <div className="password flex items-center justify-center bg-transparent">
        <i className="mr-3 text-xl bg-transparent">
          <FiKey />
        </i>
        <input className="w-full border-2 border-[#030723] my-3 h-9 bayangan_field focus:outline-none focus:ring focus:ring-blue-500 p-2 selection:bg-blue-500 selection:text-blue-100" type="password" placeholder="Password" />
      </div>

      <button className="btn w-full bg-black hover:bg-white text-white hover:text-black border-black hover:tracking-[5px] border-2 py-2 px-4 my-3 ease-out duration-300 focus:outline-none focus:ring focus:ring-blue-500 selection:bg-blue-500 selection:text-blue-100">
        <p className="mx-auto bg-transparent">Login</p>
      </button>
    </form>
  );
};

export default LoginForm;
