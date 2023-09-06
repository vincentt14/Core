import { useState } from "react";
import { BiCategoryAlt, BiDotsHorizontal } from "react-icons/bi";
import { RiSettings6Line } from "react-icons/ri";
import Options from "./Options";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="my-20">
      <Link to="/">
        <div className="border rounded-md w-16 h-16 bg-contain bg-center logo mb-10 shadow-xl hover:border-blue-500" />
      </Link>
      <div className="flex gap-4">
        <div className="md:grid md:grid-rows-3 md:divide-y divide-borderColor items-center justify-center border border-borderColor w-16 rounded-md md:shadow-xl bg-tertiary">
          <div className={`w-16 h-16 cursor-pointer hover:bg-blue-500 hover:rounded-md hover:text-black flex items-center justify-center ${active ? "bg-white text-black rounded-md border-4 border-blue-500" : ""}`} onClick={() => setActive(!active)}>
            <BiDotsHorizontal className="w-10 h-10" />
          </div>
          <div className="w-16 h-16 cursor-pointer hover:bg-blue-500 hover:rounded-md hover:text-black flex items-center justify-center">
            <BiCategoryAlt className="w-10 h-10" />
          </div>
          <div className="w-16 h-16 cursor-pointer hover:bg-blue-500 hover:rounded-md hover:text-black flex items-center justify-center">
            <RiSettings6Line className="w-10 h-10" />
          </div>
        </div>
        {active ? <Options /> : <></>}
      </div>
    </div>
  );
};

export default Navigation;
