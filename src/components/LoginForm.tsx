import React from "react";

const LoginForm = () => {
  return (
    <form className="bg-transparent">
      <input className="w-full bg-[#292e44] border-2 rounded border-[#7340ec] mt-3 h-9" type="email" />
      <input className="w-full bg-[#292e44] border-2 rounded border-[#7340ec] my-3 h-9" type="password" />
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
