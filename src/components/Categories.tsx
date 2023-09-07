import { useEffect, useState } from "react";
import { BsRocketFill } from "react-icons/bs";

interface IDummy {
  title: string;
  url: string;
  count: number;
}

const dummy = [
  {
    id: 1,
    title: "Computer Logins", //unique
    url: "/computerlogins", //autogenerate from title lowercase + regex
    count: 2,
  },
  {
    id: 2,
    title: "Credit Cards", //unique
    url: "/creditcards", //autogenerate from title lowercase + regex
    count: 0,
  },
  {
    id: 3,
    title: "e-Banking", //unique
    url: "/ebanking", //autogenerate from title lowercase + regex
    count: 1,
  },
  {
    id: 4,
    title: "e-Shops", //unique
    url: "/eshops", //autogenerate from title lowercase + regex
    count: 0,
  },
  {
    id: 5,
    title: "Email Accounts", //unique
    url: "/emailaccounts", //autogenerate from title lowercase + regex
    count: 4,
  },
  {
    id: 6,
    title: "Web Accounts", //unique
    url: "/webaccounts", //autogenerate from title lowercase + regex
    count: 12,
  },
];

const Categories = () => {
  const [data, setData] = useState<[] | IDummy[]>([]);

  useEffect(() => {
    setData(dummy);
  }, []);

  const onCatClicked = (category: IDummy) => {
    console.log(category.url);
  };

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {data.map((dum) => (
        <div key={dum.title} className="border p-5 border-borderColor rounded-md bg-tertiary">
          <div className="grid lg:grid-cols-3">
            <div className="mb-3 lg:mb-0 lg:col-span-2">
              <div className="flex gap-4 items-center">
                <p className="text-6xl md:text-4xl lg:text-6xl font-bold">{dum.count}</p>
                <div className="flex md:flex-col gap-2 md:gap-0 text-primary">
                  <p className="text-xl font-bold">Password</p>
                  <p className="text-xl font-bold">Stored</p>
                </div>
              </div>
            </div>
            <div className="border border-blue-500 text-white rounded-md bg-seconary p-2 flex items-center justify-center hover:bg-blue-500 hover:text-black hover:border-black cursor-pointer" onClick={() => onCatClicked(dum)}>
              <BsRocketFill className="w-8 h-8" />
            </div>
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
