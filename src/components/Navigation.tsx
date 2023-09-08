import { useState } from "react";
import { RiSettings6Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { BiCategoryAlt, BiDotsHorizontal } from "react-icons/bi";

import Options from "./Options";

const Navigation = () => {
  const [active, setActive] = useState(false);
  const params = useLocation();

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className="my-20">
      <Link to="/">
        <div className="border rounded-md w-14 h-14 md:w-16 md:h-16 bg-contain bg-center logo mb-10 shadow-xl hover:border-blue-500" />
      </Link>
      <div className="flex gap-4">
        <div className="grid grid-rows-3 divide-y divide-borderColor items-center justify-center border border-borderColor rounded-md md:shadow-xl bg-tertiary">
          <div
            className={`w-14 h-14 md:w-16 md:h-16 cursor-pointer hover:bg-blue-500 hover:rounded-md hover:text-black flex items-center justify-center ${active ? "bg-white text-black rounded-md border-4 border-blue-500" : ""}`}
            onClick={toggleActive}
          >
            <BiDotsHorizontal className="w-10 h-10" />
          </div>
          <Link to="categories">
            <div className={`w-14 h-14 md:w-16 md:h-16 cursor-pointer hover:bg-blue-500 hover:rounded-md hover:text-black flex items-center justify-center ${params.pathname === "/categories" ? "bg-white text-black rounded-md" : ""}`}>
              <BiCategoryAlt className="w-10 h-10" />
            </div>
          </Link>
          <Link to="categoryEditor">
            <div className={`w-14 h-14 md:w-16 md:h-16 cursor-pointer hover:bg-blue-500 hover:rounded-md hover:text-black flex items-center justify-center ${params.pathname === "/categoryEditor" ? "bg-white text-black rounded-md" : ""}`}>
              <RiSettings6Line className="w-10 h-10" />
            </div>
          </Link>
        </div>
        {active ? <Options toggleActive={toggleActive} /> : <></>}
      </div>
    </div>
  );
};

export default Navigation;
