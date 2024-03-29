import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoReact, BiLogoRedux } from "react-icons/bi";

interface IContact {
  label: string;
  target: string;
}

const Footer = () => {
  const shortcuts = [
    {
      href: "/categories",
      label: "Categories",
    },
    {
      href: "/categoryEditor",
      label: "Category Editor",
    },
  ];

  const contacts = [
    {
      label: "Email",
      target: "stefanuslim844@gmail.com",
    },
    {
      label: "Discord U Id",
      target: "365438488679546881",
    },
  ];

  const stacks = [
    {
      name: "React.js",
      logo: <BiLogoReact className="text-white w-8 h-8" />,
    },
    {
      name: "TypeScript",
      logo: <BiLogoTypescript className="text-white w-8 h-8" />,
    },
    {
      name: "Redux",
      logo: <BiLogoRedux className="text-white w-8 h-8" />,
    },
    {
      name: "Tailwind",
      logo: <BiLogoTailwindCss className="text-white w-8 h-8" />,
    },
  ];

  const reach = [
    {
      href: "https://github.com/vincentt14",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/vincent-240775185/",
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/_vincenttlim",
      label: "Instagram",
    },
  ];

  const onHandleCopy = (contact: IContact) => {
    navigator.clipboard.writeText(contact.target);
    toast.success(`${contact.label} copied to the clipboard.`, {
      style: {
        border: "1px solid #3e3e3e",
        background: "#111",
        color: "#fff",
      },
    });
  };

  return (
    <footer id="contact" className="border-t border-borderColor bg-tertiary pt-20 pb-5">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-5 w-full flex-col place-items-center font-medium md:flex md:w-1/3">
            <ul>
              <div className="flex items-center gap-x-2">
                <div className="border border-borderColor w-12 h-12 rounded-sm bg-contain bg-center logo" />
                <h2 className="py-1 text-4xl font-bold text-white">CORE.</h2>
              </div>
              <hr className="w-32 my-3 p-1 bg-black border border-borderColor rounded-sm" />
              <h3 className="mb-4 mt-5 text-2xl font-bold text-white">Contact Founder</h3>
              {contacts.map((contact) => (
                <div key={contact.target} className="flex gap-2 my-2">
                  <p className="py-2 text-primary">{contact.label}:</p>
                  <button className="p-2 border border-borderColor rounded-sm text-primary font-mono hover:text-white hover:border-primary" onClick={() => onHandleCopy(contact)}>
                    {contact.target}
                  </button>
                </div>
              ))}
            </ul>
          </div>
          <div className="mb-5 w-full flex-col place-items-center md:flex md:w-1/3">
            <ul className="text-slate-400">
              <h3 className="mb-5 mt-4 text-xl font-semibold text-white">Shortcuts</h3>
              {shortcuts.map((shortcut) => (
                <li key={shortcut.href}>
                  <Link to={shortcut.href} className="mb-2 inline-block text-base text-primary hover:text-white">
                    {shortcut.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-5 w-full flex-col place-items-center md:flex md:w-1/3">
            <ul className="text-slate-400">
              <h3 className="mb-5 mt-4 text-xl font-semibold text-white">About Founder</h3>
              {reach.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} target="blank" className="mb-2 inline-block text-base text-primary hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-5 md:mt-8">
                <p className="mb-2 inline-block font-light text-primary">© 2023 Vincent</p>
                <div className="flex gap-x-2">
                  {stacks.map((stack) => (
                    <div key={stack.name} className="w-11 h-11 bg-black border border-borderColor rounded-md flex items-center justify-center">
                      {stack.logo}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
