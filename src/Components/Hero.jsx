import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Articles from "./TechnicalWriting";
import Spaces from "./Spaces";
import VideoContents from "./VideoContents";
import { motion, useInView, useAnimation } from "framer-motion";

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} className="">
      <section className="text-white">
        <div className="lg:my-36 mx-8 border-8 rounded-2xl border-[#232229] bg-[#1D1C22]">
          <div className="mx-8 my-8">
            <div className="flex justify-between">
              <div>
                <p> Hello there!</p>
              </div>
              <div className="font-lg text-white w-[50%] ">
                <div className="flex justify-between">
                  <a
                    href="https://www.linkedin.com/in/chidinma-nwakor-bb5771234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app
  ">
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/IamDinmaa
                  ">
                    <AiOutlineGithub />
                  </a>
                  <a
                    href="https://x.com/chidinmanwakor/
  ">
                    {" "}
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}>
              <h1 className="font-extrabold justify-center text-center my-8 text-2xl lg:text-7xl  text-[#B7AB98]">
                Chidinma Nwakor
              </h1>
            </motion.div>
            <motion.div
              className="lg:flex justify-between w-[100%]"
              transition={{ type: "inertia", velocity: 5, repeat: 1 }}
              onLoad={() => {}}>
              <h1 className=" font-extrabold justify-center text-center  text-lg lg:text-xl lg:w-[20%] my-12 text-[#B7AB98]">
                Open to Developer Advocate role
              </h1>
              <h2 className="justify-center text-center lg:text-justify w-[full] lg:w-[70%] text-wrap my-12">
                I'm a Developer Advocate dedicated to empowering developers and
                fostering vibrant tech communities. My journey in the tech world
                is driven by my love for connecting with people and sharing
                knowledge. I advocate for developers through various channels:
                Public Speaking. Technical Writing. Community Building. Creating
                and nurturing communities. Video Content. Hosting Spaces.
              </h2>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="my-2">
          <Projects />
          <Spaces />
          <Articles />
          <VideoContents />
          <About />
          <Contact />
        </div>
      </section> */}
    </div>
  );
}

export default Hero;
