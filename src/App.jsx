import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
const Front = lazy(() => import("./Components/Front"));
const Project = lazy(() => import("./Components/Project"));
const AboutMe = lazy(() => import("./Components/AboutMe"));
const Skills = lazy(() => import("./Components/Skills"));
const Contact = lazy(() => import("./Components/Contact"));
const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="w-full h-screen flex justify-center items-center">
            <div className="loader"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
