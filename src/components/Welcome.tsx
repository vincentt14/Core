import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import security from "../lottie/security.json";

const Welcome = () => {
  return (
    <div className="m-10 lg:mx-20 my-14 border border-borderColor bg-secondary p-14 rounded-md flex flex-col items-center justify-center shadow-xl">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">CORE</h1>
        <code className="font-light text-primary mt-1 text-center">Your encrypted password manager</code>
      </div>

      <div>
        <Lottie animationData={security} style={{ width: "250px", height: "250px" }} className="mx-auto blur-none" />
      </div>

      <div className="flex flex-col items-center justify-center font-light text-primary text-lg lg:text-2xl mt-2">
        <h3>Store your</h3>
        <h2>
          <span style={{ color: "white", fontWeight: "500" }}>
            <Typewriter loop cursor cursorStyle="|" typeSpeed={70} deleteSpeed={70} delaySpeed={1500} words={["Computer Logins.", "Credit Cards.", "e-Banking.", " e-Shops.", "Email Accounts.", "Web Accounts.", "Add Your Own."]} />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Welcome;
