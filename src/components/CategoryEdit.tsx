import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";

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

const CategoryEdit = () => {
  const [data, setData] = useState<[] | IDummy[]>([]);

  useEffect(() => {
    setData(dummy);
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="border p-5 border-blue-400 rounded-md bg-secondary flex items-center justify-center">
        <CustomButton btnType="button" title="Add New Category" textStyle="text-white font-mono" containerStyle="!my-0 border-borderColor hover:border-primary" to="/addCategory" />
      </div>
      {data.map((dum) => (
        <div key={dum.id} className="border p-5 border-borderColor rounded-md bg-tertiary">
          <h3 className="text-center text-blue-500 font-mono text-2xl font-bold">{dum.title}</h3>
          <CustomButton btnType="button" title="Manage Category" textStyle="text-white" containerStyle="!mb-0 border-borderColor hover:border-primary" to={`${dum.id}`} />
        </div>
      ))}
    </div>
  );
};

export default CategoryEdit;
