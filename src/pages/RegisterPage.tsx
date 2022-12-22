import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="my-20 mx-40 bayangan border-black border-2">
      <div className="grid grid-cols-9 bg-transparent">
        <div className="bg-white col-span-5 p-10">
          <hr className="bg-[#030723] border-none h-1 w-10 mb-5 mt-14" />
          <h1 className="bg-transparent text-4xl font-bold">Register.</h1>
        </div>
        <div className="bg-[#f2f6fc] col-span-4 p-10">
          <hr className="bg-[#030723] border-none h-1 w-10 mb-5 mt-14" />
          <h1 className="bg-transparent text-4xl font-bold">Hello New Champ</h1>
          <p className="bg-transparent text-slate-600 my-2">
            Fill the form below to make an account and start savings passwords <span className="font-bold">safely</span> and <span className="font-bold">neatly</span>.
          </p>
          <RegisterForm />
          <p className="bg-transparent text-center">
            Already have an account?
            <Link to="/login" className="bg-transparent text-center text-[#030723] ml-2 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
