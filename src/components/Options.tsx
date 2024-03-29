import CustomButton from "./CustomButton";

interface OptionProps {
  toggleActive: () => void;
}

const Options = ({ toggleActive }: OptionProps) => {
  const ops = [
    {
      title: "Log Out",
      href: "login",
    },
    {
      title: "Profile Settings",
      href: "settings",
    },
  ];

  return (
    <div className="absolute ml-20 bg-secondary py-3 px-5 border border-blue-400 rounded-md">
      {ops.map((op) => (
        <CustomButton key={op.href} btnType="button" title={op.title} to={op.href} containerStyle="border-borderColor bg-tertiary hover:border-primary !my-2" textStyle="text-white" onClick={toggleActive} />
      ))}
    </div>
  );
};

export default Options;
