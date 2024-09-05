import React from "react";
import Navbar from "./Navbar";
import HtmlSvg from "../Svg_File/html-5-BigIcon.svg";
import CssSvg from "../Svg_File/css-3BigIcon.svg";
import javascript from "../Svg_File/jsBigIcon.svg";
import ReactSvg from "../Svg_File/react-BigIcon.svg";
import TailwindCss from "../Svg_File/tailwind-svgBigIcon.svg";
import Github from "../Svg_File/github-BigICon.svg";
import Git from "../Svg_File/GitBigIcon.svg";
import Canva from "../Svg_File/canvaBigIcon.svg";
const Skills = () => {
  return (
    <div>
      <section
        className="w-full h-full py-5 px-9 text-white"
        style={{ background: "#F59CA9" }}
      >
        <Navbar />
        <div>
          <h1 className="text-center font-black text-6xl BlackShadow py-6">
            Skills
          </h1>
          <p className="text-xl text-center">
            Crafting digital solutions that combine creativity and technology,
            turning ideas into impactful experiences.
          </p>
        </div>
        <div className="grid grid-cols-4  max-md:place-items-center max-md:grid-cols-2 gap-3 max-sm:grid-cols-1 pt-9 justify-items-center">
          <div className="  w-60 flex items-center flex-col text-center text-xl px-4 py-4 boxShadow rounded-md border-black border mt-6">
            <img src={HtmlSvg} alt="" />
            <h1 className="text-2xl pb-2">HTML5</h1>
            <p>
              The backbone of web development, used to structure content and
              create the foundation of every web page.
            </p>
          </div>
          <div className="  w-60 flex items-center flex-col text-center text-xl px-4 py-4  boxShadow rounded-md border-black border  mt-6">
            <img src={CssSvg} alt="" />
            <h1 className="text-2xl pb-2">CSS 3</h1>
            <p>
              The styling language that brings web pages to life with design,
              layout, and visual appeal.
            </p>
          </div>
          <div className="  w-60 flex items-center flex-col text-center text-xl px-4 py-4   boxShadow rounded-md border-black border mt-6">
            <img src={javascript} alt="" />
            <h1 className="text-2xl pb-2">Javascript</h1>
            <p>
              The programming language that adds interactivity, dynamic content,
              and functionality to web pages.
            </p>
          </div>
          <div className="  w-60 flex items-center flex-col text-center text-xl px-4 py-4  boxShadow rounded-md border-black border  mt-6">
            <img src={ReactSvg} alt="" />
            <h1 className="text-2xl pb-2">React.Js</h1>
            <p>
              A powerful JavaScript library for building fast, responsive, and
              scalable user interfaces.
            </p>
          </div>
          <div className="  w-60 flex items-center flex-col text-center text-xl px-4 py-4  boxShadow rounded-md border-black border  mt-6">
            <img src={TailwindCss} alt="" />
            <h1 className="text-2xl pb-2">Tailwind Css</h1>
            <p>
              A utility-first CSS framework that enables rapid, responsive
              design with minimal code.
            </p>
          </div>
          <div className="  w-60 flex items-center flex-col text-center text-xl px-4 py-4   boxShadow rounded-md border-black border mt-6">
            <img src={Git} alt="" />
            <h1 className="text-2xl pb-2">Git</h1>
            <p>
              A distributed version control system that helps manage and track
              changes in code with collaboration features.
            </p>
          </div>
          <div className="  w-60 flex items-center flex-col text-center text-xl px-4 py-4  boxShadow rounded-md border-black border  mt-6">
            <img src={Github} alt="" />
            <h1 className="text-2xl pb-2">GitHub</h1>
            <p>
              A platform for hosting and collaborating on Git repositories,
              offering features like issue tracking, pull requests, and project
              management tools.
            </p>
          </div>
          <div className="  w-60 flex items-center flex-col text-center text-xl px-4 py-4  boxShadow rounded-md border-black border  mt-6">
            <img src={Canva} alt="" />
            <h1 className="text-2xl pb-2">Canva</h1>
            <p>
              A graphic design tool that simplifies creating visual content with
              pre-designed templates, drag-and-drop functionality
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
