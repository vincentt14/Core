import React from "react";
import { FiAtSign } from "react-icons/fi";
import { FiKey } from "react-icons/fi";

const LoginForm = () => {
  return (
    <form className="bg-transparent">
      <div className="email flex items-center justify-center">
        <i className="mr-3 text-xl">
          <FiAtSign />
        </i>
        <input className=" w-full border-2 border-[#030723] my-3 h-9 bayangan_field" type="email" />
      </div>
      <div className="password flex items-center justify-center">
        <i className="mr-3 text-xl">
          <FiKey />
        </i>
        <input className="w-full border-2 border-[#030723] my-3 h-9 bayangan_field" type="password" />
      </div>

      {/* <button>
        <div>
          <span></span>
          <p className="bg-transparent">play free</p>
        </div>
      </button> */}
    </form>
  );
};

export default LoginForm;
