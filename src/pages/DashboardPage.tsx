import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const DashboardPage = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName("Vincent");
  }, []);

  return (
    <div className="container">
      <div className="flex gap-10">
        <Navigation />
        <div className="py-20 w-full">
          <h1 className="text-5xl font-bold text-white">
            Hello <span className="first-of-type:text-blue-500">{name}</span>
          </h1>
          <hr className="w-20 mt-2 p-1 bg-tertiary border border-borderColor rounded-sm" />
          <div className="mt-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
