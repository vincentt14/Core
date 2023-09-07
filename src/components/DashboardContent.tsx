import { useState, useEffect } from "react";

import { BsRocketFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";

import Lottie from "lottie-react";
import batman from "../lottie/batman.json";
import CustomButton from "./CustomButton";

const DashboardContent = () => {
  const [categoryNum, setCategoryNum] = useState(0);
  const [favCategory, setFavCategory] = useState("");

  useEffect(() => {
    setCategoryNum(6);
    setFavCategory("Computer Logins");
  }, []);

  const favCatClicked = () => {
    alert(favCategory);
  };

  const handleFavEdit = () => {
    alert(favCategory);
  };

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="md:col-span-2 grid lg:grid-cols-2 gap-4">
        <div className="border p-5 border-borderColor rounded-md bg-tertiary">
          <div className="flex gap-4 items-center justify-between">
            <h3 className="text-2xl font-bold">Your Category Count</h3>
            <p className="text-6xl font-bold text-primary">{categoryNum}</p>
          </div>
          <CustomButton btnType="button" title="Manage Categories" textStyle="text-white" containerStyle="!mb-0 border-borderColor hover:border-primary" to="/categoryEditor" />
        </div>
        <div className="border p-5 border-borderColor rounded-md bg-tertiary">
          <div className="grid lg:grid-cols-3">
            <h3 className="mb-3 lg:mb-0 lg:col-span-2 text-2xl font-bold">Your Favourite Category</h3>
            <div className="border border-blue-500 text-white rounded-md bg-seconary p-2 flex items-center justify-center hover:bg-blue-500 hover:text-black hover:border-black cursor-pointer" onClick={favCatClicked}>
              <BsRocketFill className="w-8 h-8" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p className="font-mono text-2xl font-semibold text-blue-500">{favCategory}</p>
            <div className="text-2xl text-primary hover:text-white cursor-pointer" onClick={handleFavEdit}>
              <MdEdit />
            </div>
          </div>
        </div>
        <div className="border p-5 border-borderColor rounded-md bg-tertiary">
          <h3 className="text-4xl text-center font-bold text-blue-500">CORE</h3>
          <div className="grid lg:grid-cols-2 lg:gap-2">
            <CustomButton btnType="button" title="About" textStyle="text-white" containerStyle="!mb-0 border-borderColor hover:border-primary" />
            <CustomButton btnType="button" title="Algorithm" textStyle="text-white" containerStyle="!mb-0 border-borderColor hover:border-primary" />
          </div>
        </div>
      </div>
      <div className="border border-blue-400 rounded-md bg-secondary p-5 flex flex-col gap-2 justify-center items-center">
        <Lottie animationData={batman} style={{ width: "150px", height: "150px" }} className="mx-auto blur-none lg:!w-[250px] lg:!h-[250px] border rounded-md border-borderColor" />
        <p className="font-mono text-primary">Let the bat protect your passwords</p>
      </div>
    </div>
  );
};

export default DashboardContent;
