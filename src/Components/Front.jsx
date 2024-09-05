import React from "react";
import Navbar from "../Components/Navbar";
import Avatar from "../Svg_File/avatar.png";
import { TypeAnimation } from "react-type-animation";
const Front = () => {
  return (
    <>
      <div className="bg-yellow-400 w-full h-screen py-5 px-9  overflow-x-hidden">
        <Navbar />
        <section className="mt-11">
          <div className="flex justify-evenly items-center max-md:flex-col">
            <div className="w-64 ">
              <img src={Avatar} className="w-full" alt="" />
            </div>
            <h1
              className="text-6xl max-md:text-4xl font-black max-md:text-center z-0 dShadow"
              style={{
                color: "#2c2c2c",
              }}
            >
              I do <br /> Web Devlopment <br /> & code.
            </h1>
          </div>
          <h1 className="text-center text-2xl font-black text-gray-900 mt-5 leading-normal">
            <TypeAnimation
              sequence={[
                "I'm Vishal And I'm a Web Developer",
                3000,
                "I'm Vishal And I'm a Web Designer",
                3000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <a
            className="button-86"
            href="https://drive.google.com/file/d/1_NYLnPLs6jS8fC19EQ-0T7u6Fe4tygH6/view?usp=sharing"
            target="_blank"
          >
            Download Resume
          </a>
        </section>
      </div>
    </>
  );
};

export default Front;
