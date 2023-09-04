import React, { useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="md:grid grid-cols-2">
      <div className="bg-tertiary">dsadsad</div>
      <div className="p-14 lg:p-20 flex flex-col">
        <h1 className="font-bold text-5xl mb-7">Login</h1>
        <form>
          <div className="my-5">
            <div className="flex items-center justify-start gap-6">
              <FaUserAstronaut className="text-5xl text-primary hidden lg:block" />
              <label className="flex flex-col text-xl my-1 w-full">
                Email:
                <input type="email" name="email" className="p-2 bg-tertiary border border-borderColor rounded-md my-2" onChange={(e) => setEmail(e.target.value)} />
              </label>
            </div>

            <div className="flex items-center justify-start gap-6">
              <RiLockPasswordFill className="text-5xl text-primary hidden lg:block" />
              <label className="flex flex-col text-xl my-1 w-full">
                Password:
                <input type="password" name="password" className="p-2 bg-tertiary border border-borderColor rounded-md my-2" onChange={(e) => setPassword(e.target.value)} />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button type="submit" className="my-4 py-3 px-6 rounded-md font-semibold border bg-white hover:bg-[#ededed]">
              <span className="text-secondary lg:w-3/4">Login</span>
            </button>
            <button type="submit" className="my-4 py-3 px-6 rounded-md font-semibold border bg-tertiary border-borderColor hover:border-primary">
              <Link to="/register" className="text-white lg:w-3/4">Register</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
