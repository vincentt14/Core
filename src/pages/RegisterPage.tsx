import React, { useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { SiNamebase } from "react-icons/si";

import Welcome from "../components/Welcome";
import CustomButton from "../components/CustomButton";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submithandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div className="md:grid grid-cols-2">
      <div className="hidden md:block">
        <Welcome />
      </div>
      <div className="p-14 lg:px-20 lg:py-10 flex flex-col self-center">
        <h1 className="font-bold text-5xl mb-5">Register</h1>
        <hr className="w-20 p-1 bg-secondary border border-borderColor rounded-sm" />
        <form onSubmit={submithandler}>
          <div className="my-5">
            <div className="flex items-center justify-start gap-6">
              <SiNamebase className="text-5xl text-primary hidden lg:block" />
              <label className="flex flex-col text-xl my-1 w-full">
                Name:
                <input type="text" name="name" className="p-2 bg-tertiary border border-borderColor rounded-md my-2" onChange={(e) => setName(e.target.value)} />
              </label>
            </div>

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

          <p className="text-primary">Already have an account? Click Login First</p>
          <div className="grid grid-cols-2 gap-3">
            <CustomButton btnType="submit" containerStyle="bg-white hover:bg-[#ededed]" title="Register" textStyle="text-secondary" />
            <CustomButton btnType="button" containerStyle="bg-tertiary border-borderColor hover:border-primary" title="Login" textStyle="text-white" to="/login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
