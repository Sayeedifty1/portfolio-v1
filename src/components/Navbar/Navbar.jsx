import { useEffect, useState } from "react";
import {BsSun,BsMoonStars} from "react-icons/bs"
const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // const handleTheme = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  const NavOptions = (
    <>
      <li>
        <a href="#main">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </>
  );

  const links = (
    <>
      
      <div
          className={`rounded-3xl flex items-center py-2 px-2  ${
            theme === "dark" ? "bg-white" : "bg-[#111]"
          }`}
        >
          <div
            className={`${
              theme === "light" ? "text-white" : "text-black"
            }  cursor-pointer `}
            
       
          >
            {theme === "dark"?<BsSun   onClick={() => setTheme("light")}/>: <BsMoonStars onClick={() => setTheme("dark")} />}
          </div>
        
        </div>
    </>
  );

  return (
    <div className="navbar fixed z-50  bg-slate-50 dark:bg-black dark:text-yellow-500 ">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavOptions}
          </ul>
        </div>
        <a className="btn btn-ghost font normal-case text-xl">Sayeed</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavOptions}</ul>
      </div>
      <div className="navbar-end p-2">
        <ul className="menu flex items-center flex-row px-1 mr-4">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
