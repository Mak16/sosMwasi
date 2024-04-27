/* eslint-disable react/no-unescaped-entities */
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import img from "../assets/images/logo_sosmwasi 1.png"
function Navigation() {
  const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    };
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };
  const links=[
    {
      name: "A propos",
      link: "/about",
      className: "text-black flex justify-center items-center text-center text-center xl:h-[70px] h-[50px]",
    },
    {
      name: "Que sont les VGB?",
      link: "/vbg",
      className: "text-black flex justify-center items-center text-center text-center xl:h-[70px] h-[50px]",
    },
    {
      name: "Que dit la loi?",
      link: "/low",
      className: "text-black flex justify-center items-center text-center text-center xl:h-[70px] h-[50px]",
    },
    {
      name: "Signaler un cas",
      link: "",
      className: "bg-[#0096F5] font-bold text-white flex justify-center items-center w-[225px] xl:h-[70px] h-[50px] rounded-[10px] px-[25px] ",
    },
    {
      name: `Appel d'urgence
      0825505783`,
      link: "contact",
      className:
        "bg-[#f5119c] font-bold text-white flex justify-center items-center text-center text-center w-[225px] xl:h-[70px] h-[50px] rounded-[10px] px-[25px]",
    },
  ]
  return (
    <>
      <div  className="relative z-50">
        <div className="flex flex-row justify-between  xl:py-2 py-4 xl:px-10 px-5 top-0 bg-white items-center fixed w-full">
        <Link to="">
          <img
            className="sm:max-w-[180px] max-w-[100px]"
            src={img}
            alt="logo S.O.S Mwasi"
          />
        </Link>
          <ul className="hidden lg:flex gap-10">
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.link} className={link.className}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute z-10 right-4 top-3 cursor-pointer lg:hidden"
          >
            {isOpen ? (
              <Icon
                className="text-[#0096F5] w-10 h-10"
                icon="material-symbols:close"
              />
            ) : (
              <Icon
                className="text-[#0096F5] w-10 h-14"
                icon="material-symbols-light:menu"
              />
            )}
          </div>
          <ul
            className={` bg-white lg:flex pl-5 lg:pl-0  lg:items-center lg:pb-0 pb-12 z-10 absolute left-0 w-full lg:z-auto gap-4 transition-all duration-300 ease-in flex lg:flex-row flex-col justify-between 
                    ${
                      isOpen
                        ? "top-14 rounded-b-2xl items-center"
                        : "top-[-490px] rounded-b-2xl items-center"
                    }`}
          >
            {links.map((link, index) => (
              <li className={link.className} key={index}>
                <Link to={link.link} onClick={closeMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navigation;
