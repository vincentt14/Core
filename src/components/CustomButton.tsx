import React from "react";
import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface ICustomButton {
  title: string;
  btnType: "button" | "submit";
  textStyle: string;
  containerStyle: string;
  to?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({ title, btnType, textStyle, containerStyle, onClick, to }: ICustomButton) => {
  if (btnType === "button") {
    return (
      <Link to={to!}>
        <button type="button" className={`my-4 py-3 px-6 rounded-md font-semibold border w-full ${containerStyle}`} onClick={onClick}>
          <span className={`${textStyle}`}>{title}</span>
        </button>
      </Link>
    );
  }

  return (
    <button type="submit" className={`my-4 py-3 px-6 rounded-md font-semibold border ${containerStyle}`} onClick={onClick}>
      <span className={`${textStyle}`}>{title}</span>
    </button>
  );
};

export default CustomButton;
