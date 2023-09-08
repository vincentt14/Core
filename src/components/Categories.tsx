import { useEffect, useState } from "react";
import { BsRocketFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface IDummy {
  id: number;
  title: string;
  count: number;
}

const dummy = [
  {
    id: 6,
    title: "Computer Logins", //unique
    count: 2,
  },
  {
    id: 5,
    title: "Credit Cards", //unique
    count: 0,
  },
  {
    id: 4,
    title: "e-Banking", //unique
    count: 1,
  },
  {
    id: 3,
    title: "e-Shops", //unique
    count: 0,
  },
  {
    id: 2,
    title: "Email Accounts", //unique
    count: 4,
  },
  {
    id: 1,
    title: "Web Accounts", //unique
    count: 12,
  },
];

const Categories = () => {
  const [data, setData] = useState<[] | IDummy[]>([]);

  useEffect(() => {
    setData(dummy);
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {data.map((dum) => (
        <div key={dum.title} className="border p-5 border-borderColor rounded-md bg-tertiary">
          <div className="grid lg:grid-cols-3 items-center">
            <div className="mb-3 lg:mb-0 lg:col-span-2">
              <div className="flex gap-4 items-center">
                <p className="text-6xl md:text-4xl lg:text-6xl font-bold">{dum.count}</p>
                <div className="flex md:flex-col gap-2 md:gap-0 text-primary">
                  <p className="text-xl font-bold">Password</p>
                  <p className="text-xl font-bold">Stored</p>
                </div>
              </div>
            </div>
            <Link to={`${dum.id}`}>
              <div className="border border-blue-500 text-white rounded-md bg-seconary p-2 md:p-3 flex items-center justify-center hover:bg-blue-500 hover:text-black hover:border-black cursor-pointer">
                <BsRocketFill className="w-8 h-8" />
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p className="font-mono text-2xl font-semibold text-blue-500">{dum.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
