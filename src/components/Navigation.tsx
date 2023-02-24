import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const refBut = useRef<HTMLButtonElement>(null);
  const refHead = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   window.onscroll = function () {
  //     const fixedNav: number | undefined = refHead.current?.offsetTop;

  //     if (window.pageYOffset > fixedNav != undefined) {
  //       refHead.current?.classList.add("navbar-fixed");
  //     } else {
  //       refHead.current?.classList.remove("navbar-fixed");
  //     }
  //   };
  // }, []);

  const toggleClicked = () => {
    setToggle(!toggle);
    if (toggle === true) {
      refBut.current?.classList.add("hamburger_active");
    } else {
      refBut.current?.classList.remove("hamburger_active");
    }
  };

  return (
    <header ref={refHead} className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container px-4">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link to="/" className="text-[#030723] font-bold text-lg block py-6 hover:text-blue-500">
              Core.
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button ref={refBut} name="hamburger" type="button" className="block absolute right-4" onClick={toggleClicked}>
              <span className="hamburger_line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger_line transition duration-300 ease-in-out"></span>
              <span className="hamburger_line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
