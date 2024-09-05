import React from "react";
import Navbar from "./Navbar";
import DevlopYourself from "../projectImage/DevelopYourself.png";
import FitnessGuru from "../projectImage/fitnessGuru.png";
import linkRedirect from "../Svg_File/linkRedirectSvg.svg";
import githubSvg from "../Svg_File/GithubLogoSvg.svg";
import weatherApp from "../projectImage/WeatherApp.png";
const Project = () => {
  return (
    <div>
      <section className="h-full w-full py-5 px-9 bg-blue-300">
        <Navbar />
        <h1 className="font-black text-6xl BlackShadow  pt-9 text-center text-white pb-11">
          Projects
        </h1>
        <div className="flex flex-col  max-md:items-center gap-9">
          <div className="bg-white cards flex max-md:flex-col w-3/4 items-center gap-5  max-md:w-full border border-t-gray-800 border-b-black border-l-gray-800 border-r-black boxShadow rounded-md  p-4">
            <div className="max-md:min-w-full  min-w-64 max-w-80">
              <img
                src={FitnessGuru}
                className="w-full object-cover rounded-md hover:scale-105 transition-all duration-300 "
                alt=""
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl py-4 font-bold">Fitness Guru</h1>
              <p>
                Our gym's website offers a dynamic experience, featuring an
                interactive tour of our facilities, detailed trainer profiles,
                and clear membership options. Users can explore different
                workout zones, meet our expert staff, compare membership plans,
                and book sessions—all with a smooth, responsive interface
                designed for easy navigation.
              </p>
              <div>
                <h1 className="font-semibold">Tech Stacks</h1>
                <p className="text-sm font-mono pl-4">
                  Core CSS, React.Js, Netlify, Github, React Routers, React
                  Modals, Fetch-JS, Weather API
                </p>
              </div>
              <div className="flex justify-end gap-3 items-center pt-5">
                <span className="text-sm text-red-500">• LIVE</span>
                <a
                  href="https://fitnessguruio.netlify.app/"
                  className="hover:scale-125 transition-all duration-300"
                >
                  <img src={linkRedirect} alt="" />
                </a>
                <a
                  href="https://github.com/Vishal-gitthub/FitGuru.io"
                  className="hover:scale-125 transition-all duration-300"
                >
                  <img src={githubSvg} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white cards flex max-md:flex-col w-3/4 items-center gap-5  max-md:w-full border border-t-gray-800 border-b-black border-l-gray-800 border-r-black boxShadow rounded-md  p-4">
            <div className="max-md:min-w-full min-w-64 max-w-80">
              <img
                src={DevlopYourself}
                className="w-full object-cover rounded-md hover:scale-105 transition-all duration-300 "
                alt=""
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl py-4 font-bold">Develop Yourself</h1>
              <p>
                Full frontend development for 'Develop Yourself,' a digital
                marketing company. Focused on creating a user-friendly interface
                that enhances the online presence of clients through effective
                design and smooth navigation.
              </p>
              <div>
                <h1 className="font-semibold">Tech Stacks</h1>
                <p className="text-sm font-mono pl-4">
                  Core CSS, React.Js, Google Analytics, Github, Vercel, React
                  Routers, React Carousels, Fetch-JS, Email.Js
                </p>
              </div>
              <div className="flex justify-end gap-3 items-center pt-5">
                <span className="text-sm text-red-500">• LIVE</span>

                <a
                  href="https://developyourself.in/"
                  className="hover:scale-125 transition-all duration-300"
                >
                  <img src={linkRedirect} alt="" />
                </a>
                <a
                  href="https://github.com/Vishal-gitthub/DYS"
                  className="hover:scale-125 transition-all duration-300"
                >
                  <img src={githubSvg} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className=" bg-white cards flex max-md:flex-col w-3/4 items-center gap-5  max-md:w-full border border-t-gray-800 border-b-black border-l-gray-800 border-r-black boxShadow rounded-md  p-4">
            <div className="max-md:min-w-full min-w-64 max-w-80">
              <img
                src={weatherApp}
                className="w-full object-cover rounded-md hover:scale-105 transition-all duration-300 "
                alt=""
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl py-4 font-bold">Weather App</h1>
              <p>
                A basic yet functional web application that provides detailed
                weather information, including temperature, humidity, wind
                speed, and more for any location. With its simple design, users
                can easily access comprehensive weather data at a glance.
              </p>
              <div>
                <h1 className="font-semibold">Tech Stack</h1>
                <p className="text-sm font-mono pl-4">
                  Tailwind CSS, React.Js, Vercel, React Routers, Fetch-JS,
                  Github
                </p>
              </div>
              <div className="flex justify-end gap-3 items-center pt-5">
                <span className="text-sm text-red-500">• LIVE</span>

                <a
                  href="https://weather-byvishal.vercel.app/"
                  className="hover:scale-125 transition-all duration-300"
                >
                  <img src={linkRedirect} alt="" />
                </a>
                <a
                  href="https://github.com/Vishal-gitthub/WeatherApp"
                  className="hover:scale-125 transition-all duration-300"
                >
                  <img src={githubSvg} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
