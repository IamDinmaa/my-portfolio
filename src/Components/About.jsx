import React, { useEffect, useRef } from "react";
import MyPicture from "../Images/MyPicture3.JPG";
import { motion, useInView, useAnimation } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} className="w-[100%] h-[100%]" id="about">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}>
        <h1 className="py-8 font-extrabold flex justify-center text-4xl text-[#B0A593] tracking-wider">
          ABOUT ME
        </h1>
        <img
          className="mx-24 lg:mx-64  border-8 border-[#fdf6ee] rounded-lg shadow-white shadow-md"
          src={MyPicture}
          alt=""
          width={"50%"}
          height={"100%"}></img>
        <p className="flex justify-center text-[#B0A593] my-2">
          Chidinma Nwakor ~ Developer Advocate
        </p>
        <div>
          <div className="my-6 mx-3 lg:mx-24 text-white text-justify">
            Hello! I'm Chidinma Nwakor, a
            <span className=" text-[#B7AB98]"> Developer Advocate </span>
            dedicated to empowering developers and fostering vibrant tech
            communities. My journey in the tech world is driven by my love for
            connecting with people and sharing knowledge. I advocate for
            developers through various channels: Public Speaking. Technical
            Writing. Community Building. Creating and nurturing communities.
            Video Content. Hosting Spaces. With a strong background in
            JavaScript and its frameworks, and experience in public speaking,
            technical writing, and community building, I bring a unique blend of
            technical expertise and a passion for empowering developers. My
            hands-on experience and deep understanding of the developer
            ecosystem make me a valuable addition to any team.
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
