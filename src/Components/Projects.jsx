import React, { useEffect, useRef } from "react";
import DevBuddy from "../Images/DevBuddy.png";
import Entertainment from "../Images/Entertainment.png";
import Portfolio from "../Images/Portfolio.png";
import Dictionary from "../Images/Dictionary.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import { Link } from "react-router-dom";
function Projects() {
  const [move, setMove] = React.useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} className="my-6" id="projects">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}>
        <div className="mx-2 font-extrabold text-4xl lg:text-5xl flex justify-center text-center">
          <h1 className="my-4 text-[#B0A593]">My latest Projects</h1>
        </div>
        <div className="lg:flex justify-between w-[100%] my-24 px-6">
          <div className="text-justify text-wrap lg:w-[50%]">
            <div className="flex justify-between lg:w-[30%]">
              <h1 className="font-bold my-2 text-[#B0A593]">Dev Buddy</h1>
              <BsArrowUpRightCircleFill className="rounded-full text-[#B0A593] hidden lg:block" />
            </div>
            <p className="my-4 lg:mr-12  text-white">
              The Dev Buddy app is designed to assist developers in mastering
              JavaScript through a comprehensive learning experience. It offers,
              Interactive Question Arrays: Each topic is accompanied by a set of
              questions to test the user's understanding. Scoring System: After
              answering the questions, users receive scores to track their
              progress. Beginner and Advanced Levels: The questions are
              categorized into beginner and advanced levels, catering to
              developers at different stages of their learning journey. This
              application hasn't reached the MVP yet.
            </p>
            <div className="flex justify-between lg:w-[50%]">
              <Link to="https://github.com/IamDinmaa/Devbuddy">
                <p className="text-[#B0A593]">Source Code</p>
              </Link>
              {/* <p className="text-[#B0A593]">View live project</p> */}
            </div>
          </div>
          <div className="w-[full] lg:w-[40%] h-[90%] my-2">
            <img
              className="outline-none"
              src={DevBuddy}
              alt=""
              width={"100%"}
              height={"100%"}></img>
          </div>
        </div>
        <div className="flex justify-between w-[100%] px-6">
          <div className="w-[full] lg:w-[40%] h-[90%] hidden lg:block">
            <img
              className="outline-none hidden lg:block my-2 "
              src={Entertainment}
              alt=""
              width={"100%"}
              height={"100%"}></img>
          </div>
          <div className="text-justify text-wrap lg:w-[50%] lg:mx-0">
            <div className="flex justify-between lg:w-[35%]">
              <h1 className="font-bold my-2 text-[#B0A593]">
                Entertainment App
              </h1>
              <BsArrowUpRightCircleFill className="rounded-full text-[#B0A593] hidden lg:block" />
            </div>
            <p className="my-4 lg:mr-12 text-white">
              The entertainment web app allows users to create accounts, manage
              profiles, and upload profile pictures. It provides a library of
              images and videos sourced through pixels. Users can search for
              content and get personalized content based on what they searched.
            </p>
            <div className="flex justify-between lg:w-[50%]">
              <Link to="https://github.com/IamDinmaa/movie-box"></Link>
              <p className="text-[#B0A593]">Source Code</p>
              <Link to="#">
                <p className="text-[#B0A593]">View live project</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[full] lg:w-[40%] h-[90%]  my-2 block lg:hidden">
          <img
            className="outline-none"
            src={Entertainment}
            alt=""
            width={"100%"}
            height={"100%"}></img>
        </div>
        <div className="lg:flex justify-between w-[100%] my-24 px-6">
          <div className="text-justify text-wrap lg:w-[50%]">
            <div className="flex justify-between lg:w-[30%]">
              <h1 className="font-bold my-2 text-[#B0A593]">Dictionary Box</h1>
              <BsArrowUpRightCircleFill className="rounded-full text-[#B0A593] hidden lg:block" />
            </div>
            <p className="my-4 lg:mr-12  text-white">
              A little bit sophisticated dictionary application for searching
              for the meaning and also see the word class of words. It also has
              a dark mode feature and ability to change fonts depending on users
              preference.
            </p>
            <div className="flex justify-between lg:w-[50%]">
              <Link to="https://github.com/IamDinmaa/dictionary">
                <p className="text-[#B0A593]">Source Code</p>
              </Link>
              <Link to="https://dictionary-box.vercel.app/">
                <p className="text-[#B0A593]">View live project</p>
              </Link>
            </div>
          </div>
          <div className="w-[full] my-5 mx-2 lg:w-[40%] h-[90%]">
            <img
              className="outline-none"
              src={Dictionary}
              alt=""
              width={"100%"}
              height={"100%"}></img>
          </div>
        </div>
        <div className="flex justify-between w-[100%] my-24 px-6">
          <div className="w-[full] lg:w-[40%] h-[90%] my-2  hidden lg:block">
            <img
              className="outline-none"
              src={Portfolio}
              alt=""
              width={"100%"}
              height={"100%"}></img>
          </div>
          <div className="text-justify text-wrap lg:w-[50%]">
            <div className="flex justify-between lg:w-[30%]">
              <h1 className="font-bold my-2 text-[#B0A593]">My Portfolio</h1>
              <BsArrowUpRightCircleFill className="rounded-full text-[#B0A593] hidden lg:block" />
            </div>
            <p className="my-4 lg:mr-12  text-white">
              Yep, That's me😊Exactly what you are viewing right now. It
              includes my work and interest as a developer advocate. You can
              also find social links and mediums where you can reach out to me.
            </p>
            <div className="flex justify-between lg:w-[50%]">
              <p className="text-[#B0A593]">View live project</p>
            </div>
            <div className="w-[full] lg:w-[40%] h-[90%]  my-2 block lg:hidden">
              <img
                className="outline-none"
                src={Portfolio}
                alt=""
                width={"100%"}
                height={"100%"}></img>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
