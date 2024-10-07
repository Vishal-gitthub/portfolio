import React, { useState } from "react";
import logo from "../Svg_File/logo.png";
import listIcon from "../Svg_File/list.svg";
import arrowRight from "../Svg_File/arrow-right.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  let [widthState, setWidthState] = useState(false);
  function menuBtn() {
    setWidthState(!widthState);
  }
  function menuCloseBtn() {
    setWidthState(!widthState);
  }

  return (
    <div>
      <section
        className=" rounded-3xl py-2 px-8 flex items-center justify-between navShadow sticky top-0 z-40"
        style={{ background: "var(--NavBgColor)" }}
      >
        <div className="w-52">
          <img src={logo} />{" "}
        </div>

        <div className="flex gap-4 max-md:hidden text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "softYellow scale-125" : "text-white scale-100"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-me"
            className={({ isActive }) =>
              isActive ? "softYellow scale-125" : "text-white scale-100"
            }
          >
            About Me
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive ? "softYellow scale-125" : "text-white scale-100"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "softYellow scale-125" : "text-white scale-100"
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "softYellow scale-125" : "text-white scale-100"
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="hamburger hidden max-md:block">
          <button onClick={menuBtn}>
            <img src={listIcon} alt="" />
          </button>
        </div>
      </section>
      <div
        id="sidebar"
        className={`flex flex-col fixed bg-purple-400 h-full top-0 right-0 transition-transform duration-500 z-50 ${
          widthState ? "translate-x-0" : "translate-x-full"
        } text-white max-md:w-64`}
        style={{
          boxShadow: widthState
            ? " 0px 8px 20px 2px #c084fc"
            : " 0px 0px 0px 0px #c084fc",
        }}
      >
        <button onClick={menuCloseBtn} className="p-4 grid place-items-center">
          <img src={arrowRight} alt="" />
        </button>
        <NavLink
          to="/"
          className="py-3 hover:bg-pink-400 rounded-2xl mx-2 px-4 liHover text-xl"
        >
          Home
        </NavLink>
        <NavLink
          to="/about-me"
          className="py-3 hover:bg-pink-400 rounded-2xl mx-2 px-4 liHover text-xl"
        >
          About Me
        </NavLink>

        <NavLink
          to="/project"
          className="py-3 hover:bg-pink-400 rounded-2xl mx-2 px-4 liHover text-xl"
        >
          Projects
        </NavLink>
        <NavLink
          to="/skills"
          className="py-3 hover:bg-pink-400 rounded-2xl mx-2 px-4 liHover text-xl"
        >
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          className="py-3 hover:bg-pink-400 rounded-2xl mx-2 px-4 liHover text-xl"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
