import React from "react";
import { FiAtSign, FiKey, FiUser, FiLock } from "react-icons/fi";

const RegisterForm = () => {
  return (
    <form className="bg-transparent">
      <div className="flex items-center justify-center bg-transparent">
        <i className="mr-3 text-xl">
          <FiUser />
        </i>
        <input className="w-full border-2 border-[#030723] my-3 h-9 bayangan_field focus:outline-none focus:ring focus:ring-blue-500 p-2 selection:bg-blue-500 selection:text-blue-100" type="text" placeholder="Name" />
      </div>
      <div className="flex items-center justify-center bg-transparent">
        <i className="mr-3 text-xl">
          <FiAtSign />
        </i>
        <input className="w-full border-2 border-[#030723] my-3 h-9 bayangan_field focus:outline-none focus:ring focus:ring-blue-500 p-2 selection:bg-blue-500 selection:text-blue-100" type="email" placeholder="Email" />
      </div>
      <div className="flex items-center justify-center bg-transparent">
        <i className="mr-3 text-xl">
          <FiKey />
        </i>
        <input className="w-full border-2 border-[#030723] my-3 h-9 bayangan_field focus:outline-none focus:ring focus:ring-blue-500 p-2 selection:bg-blue-500 selection:text-blue-100" type="password" placeholder="Password" />
      </div>
      <div className="flex items-center justify-center bg-transparent">
        <i className="mr-3 text-xl">
          <FiLock />
        </i>
        <input className="w-full border-2 border-[#030723] my-3 h-9 bayangan_field focus:outline-none focus:ring focus:ring-blue-500 p-2 selection:bg-blue-500 selection:text-blue-100" type="password" placeholder="Confirm Password" />
      </div>

      <button className="btn w-full bg-black hover:bg-white text-white hover:text-black border-black hover:tracking-[5px] border-2 py-2 px-4 my-3 ease-out duration-300 focus:outline-none focus:ring focus:ring-blue-500 selection:bg-blue-500 selection:text-blue-100">
        <p className="mx-auto bg-transparent">Register</p>
      </button>
    </form>
  );
};

export default RegisterForm;
