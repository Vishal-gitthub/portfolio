import React from "react";
import Navbar from "../Components/Navbar";
import NodeSvg from "../TechStackImages/node.svg";
import VsCodeSvg from "../TechStackImages/VS Code-3EA6E9.svg";
import HtmlSvg from "../TechStackImages/html5-01-svgrepo-com.svg";
import JsSvg from "../TechStackImages/javascript-svg.svg";
import ReactSvg from "../TechStackImages/react-svg.svg";
import bootstrap from "../TechStackImages/bootstrap.svg";
import codepen from "../TechStackImages/codepenSvg.svg";
import netlify from "../TechStackImages/netlify.svg";
import css from "../TechStackImages/CSSSvg.svg";
import git from "../TechStackImages/GitSVg.svg";
import github from "../TechStackImages/githubSvg.svg";
import node from "../TechStackImages/node.svg";
import npm from "../TechStackImages/npmsvg.svg";
import canva from "../TechStackImages/canva.svg";
import CodesandBox from "../TechStackImages/CodesandBox.svg";
import prettier from "../TechStackImages/prettier.svg";
import replit from "../TechStackImages/ReplitSvg.svg";
import vercel from "../TechStackImages/vercel.svg";
import tailwindcss from "../TechStackImages/tailwindcss-.svg";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
const AboutMe = () => {
  const data = {
    labels: ["React.Js", "CSS", "JAVASCRIPT", "HTML", "Tailwind CSS"],
    datasets: [
      {
        data: [40, 70, 50, 100, 50],
        backgroundColor: [
          "#f39c12",
          "#f1c40f",
          "#7f8c8d",
          "#3498db",
          "#9b59b6",
        ],
        hoverBackgroundColor: [
          "#e67e22",
          "#f39c12",
          "#95a5a6",
          "#2980b9",
          "#8e44ad",
        ],
      },
    ],
  };
  return (
    <div>
      <section
        className="h-full w-full  py-5 px-9 "
        style={{ background: "#8FA6CB" }}
      >
        <Navbar />
        <h1 className="text-6xl mt-20 font-black dShadow">About</h1>
        <div className=" pl-6 text-lg text-white aboutMeTexts">
          <p className="mt-6">
            Hello, I'm Vishal Sharma, a passionate web developer from Ghazipur,
            Uttar Pradesh, India. As a recent graduate, I am eager to dive into
            the world of web development, constantly learning and adapting to
            new technologies. I'm excited to bring fresh ideas and innovative
            solutions to the projects I work on.
          </p>
          <p className="mt-4">
            I’m enthusiastic about exploring a wide array of technologies, from
            web development and SPAs to React applications and responsive
            design. My mission is to craft high-performance applications that
            tackle real-world challenges and offer users a seamless, engaging
            experience.
          </p>
        </div>
        <div className="aboutMeTexts pt-6">
          <h1 className="text-3xl font-bold ">My Tech Stack</h1>
          <div className="flex items-center max-md:flex-col">
            <div className="flex flex-wrap">
              <img src={NodeSvg} alt="" className="p-1" />
              <img src={ReactSvg} alt="" className="p-1" />
              <img src={JsSvg} alt="" className="p-1" />
              <img src={VsCodeSvg} alt="" className="p-1" />
              <img src={HtmlSvg} alt="" className="p-1" />
              <img src={bootstrap} alt="" className="p-1" />
              <img src={codepen} alt="" className="p-1" />
              <img src={netlify} alt="" className="p-1" />
              <img src={css} alt="" className="p-1" />
              <img src={git} alt="" className="p-1" />
              <img src={github} alt="" className="p-1" />
              <img src={node} alt="" className="p-1" />
              <img src={npm} alt="" className="p-1" />
              <img src={canva} alt="" className="p-1" />
              <img src={CodesandBox} alt="" className="p-1" />
              <img src={prettier} alt="" className="p-1" />
              <img src={replit} alt="" className="p-1" />
              <img src={vercel} alt="" className="p-1" />
              <img src={tailwindcss} alt="" className="p-1" />
            </div>
            <div className="h-52">
              <Doughnut data={data} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
