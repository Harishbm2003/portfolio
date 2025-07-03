import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./Pages/Skills";
import Loading from "./components/Loading";
import Projects from "./Pages/Projects";
import Courses from "./Pages/Courses";
import Myprojects from "./Pages/Myprojects";
import Graphicdesign from "./Pages/Graphicdesign";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<><Home /><Education /></>} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/myprojects" element={<Myprojects />} />
            <Route path="/graphic-design" element={<Graphicdesign />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
