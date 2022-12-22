import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#030723] pt-24 pb-5 border-t-2 border-black">
      <div className="container mx-auto bg-transparent">
        <div className="flex flex-wrap bg-transparent mx-auto px-4 sm:px-4 md:px-4 lg:px-20">
          <div className="w-full bg-transparent font-medium md:w-1/3 flex flex-col place-items-center">
            <ul className="bg-transparent">
              <h2 className="font-bold text-4xl text-white bg-transparent mb-5">Core.</h2>
              <h3 className="bg-transparent text-white font-bold text-2xl mb-2">Contact Me</h3>
              <p className="bg-transparent text-slate-400">vincent14@student.umn.ac.id</p>
              <p className="bg-transparent text-slate-400">Pontianak</p>
              <p className="bg-transparent text-slate-400">Kalimantan Barat</p>
            </ul>
          </div>
          <div className="w-full mb-12 bg-transparent md:w-1/3 flex flex-col place-items-center">
            <ul className="bg-transparent text-slate-400">
              <h3 className="font-semibold text-xl text-white mb-5 bg-transparent">Reach Me Out</h3>
              <li className="bg-transparent">
                <a href="https://github.com/vincentt14" className="inline-block text-base bg-transparent hover:text-blue-500 mb-2">
                  Github
                </a>
              </li>
              <li className="bg-transparent">
                <a href="https://www.linkedin.com/in/vincent-240775185/" className="inline-block text-base bg-transparent hover:text-blue-500 mb-2">
                  LinkedIn
                </a>
              </li>
              <li className="bg-transparent">
                <a href="https://www.instagram.com/_vincenttlim" className="inline-block text-base bg-transparent hover:text-blue-500 mb-2">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full mb-12 bg-transparent md:w-1/3 flex flex-col place-items-center">
            <ul className="bg-transparent text-slate-400">
              <h3 className="font-semibold text-xl text-white mb-5 bg-transparent">About</h3>
              <li className="bg-transparent">
                <a href="https://github.com/vincentt14" className="inline-block text-base bg-transparent hover:text-blue-500 mb-2">
                  About Core
                </a>
              </li>
              <li className="bg-transparent">
                <a href="https://www.linkedin.com/in/vincent-240775185/" className="inline-block text-base bg-transparent hover:text-blue-500 mb-2">
                  About Me
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full bg-transparent">
          <p className="font-medium text-sm text-slate-400 text-center bg-transparent">Copyright © 2023</p>
          <p className="font-medium text-sm text-slate-400 text-center bg-transparent">
            Design by <span className="text-white bg-transparent">Vincent</span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
