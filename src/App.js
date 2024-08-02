// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Hero from "./Components/Hero";
// import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import { useState } from "react";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Spaces from "./Components/Spaces";
import Articles from "./Components/TechnicalWriting";
import VideoContents from "./Components/VideoContents";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Headroom from "react-headroom";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-b from-[#0B0909] to-[#0e011b] relative pt-2">
        <div className="flex justify-between mx-8 text-[#B0A593] fixed w-[90%] ">
          <div>
            <h1 className="lg:mx-2 my-2">Chidinma Nwakor</h1>
          </div>
          <div className="lg:hidden flex items-start my-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
          <div
            className={`flex flex-col lg:flex lg:flex-row justify-center items-center border-4 border-[#232229] bg-[#1D1C22] rounded-lg transition-transform duration-300 ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            } lg:translate-y-0`}>
            <Link to="#about" className="my-2 lg:mx-2 block lg:inline">
              About
            </Link>
            <Link to="#articles" className="my-2 lg:mx-2 block lg:inline">
              Articles
            </Link>
            <Link to="#projects" className="my-2 lg:mx-2 block lg:inline">
              Projects
            </Link>
            <Link to="#spaces" className="block lg:inline my-2 lg:mx-2">
              Spaces
            </Link>
            <Link to="#videos" className="my-2 lg:mx-2 block lg:inline">
              Videos
            </Link>
            <Link to="#contact" className="my-2 lg:mx-2 block lg:hidden">
              Contact
            </Link>
          </div>
          <div className="my-2 hidden lg:block">
            <Link to="#contact">Contact</Link>
          </div>
        </div>
        <section>
          <div className="my-2 pt-12">
            <Hero />
            <Projects />
            <Spaces />
            <Articles />
            <VideoContents />
            <About />
            <Contact />
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}
export default App;
{
  /* <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="recommendation" element={<Recommendation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="spaces" element={<Spaces />} />
          <Route path="articles" element={<TechnicalWriting />} />
          <Route path="videos" element={<VideoContents />} />
        </Routes> */
}
