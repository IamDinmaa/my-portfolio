import React, { useEffect, useRef } from "react";
import JavaScriptvsTypeScript from "../Images/JavaScriptvsTypeScript.png";
import EventBubbling from "../Images/EventBubbling.png";
import Iterators from "../Images/Iterators.png";
import Tutoring from "../Images/Tutoring.png";
import Vanilla from "../Images/Vanilla.png";
import DictionaryArticle from "../Images/DictionaryArticle.png";
import Inheritance from "../Images/Inheritance.png";
import Shorthand from "../Images/Shorthand.png";
import PsychologyOfCoding from "../Images/PsychologyOfCoding.png";
import MemoryManagement from "../Images/MemoryManagement.png";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";

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
    <div ref={ref} className="my-6" id="articles">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}>
        <div className="mx-2  font-extrabold text-5xl flex justify-center  ">
          <h1 className="my-4 text-[#B0A593]">Articles</h1>
        </div>
        <div className="w-[100%] lg:flex justify-between my-6">
          <div className="lg:w-[50%] flex justify-between mx-3 lg:mx-12 my-8">
            <img src={DictionaryArticle} alt="" className="w-[40%]" />
            <p className="my-4 text-[#e9e8e7] w-[60%] text-xl mx-4">
              <Link to="https://blog.openreplay.com/building-a-dictionary-app-including-audio-pronunciation/">
                Building a Dictionary App, including Audio pronunciation.
              </Link>
            </p>
          </div>
          <div className="lg:w-[50%] flex justify-between mx-3 lg:mx-12 my-8">
            <img src={Iterators} alt="" width={"40%"} />
            <p className="my-4 text-[#e9e8e7] w-[60%] text-xl mx-4">
              <Link to="https://blog.openreplay.com/deep-dive-into-iterators-iterables-and-generators/">
                Deep dive into JavaScript's Iterators, Iterables and Generators
              </Link>
            </p>
          </div>
        </div>
        <div className="w-[100%] lg:flex justify-between my-6">
          <div className="lg:w-[50%] flex justify-between mx-3 lg:mx-12 my-8">
            <img src={JavaScriptvsTypeScript} alt="" width={"40%"} />
            <p className="my-4 text-[#e9e8e7] w-[60%] text-xl mx-4">
              <Link to="https://blog.openreplay.com/typescript-or-javascript--which-one-do-you-need-to-be-a-web-developer/">
                TypeScript or JavaScript: Which one do you need to be a web
                developer?.
              </Link>
            </p>
          </div>
          <div className="lg:w-[50%] flex justify-between mx-3 lg:mx-12 my-8">
            <img src={Vanilla} alt="" width={"40%"} />
            <p className="my-4 text-[#e9e8e7] w-[60%] text-xl mx-4">
              <Link to="https://blog.openreplay.com/vanilla-javascript-vs-javascript-frameworks/">
                Vanilla JavaScript vs. JavaScript Frameworks:Ten top
                differences.
              </Link>
            </p>
          </div>
        </div>
        <div className="w-[100%] lg:flex justify-between my-6">
          <div className="lg:w-[50%] flex justify-between mx-3 lg:mx-12 my-8">
            <img src={EventBubbling} alt="" width={"40%"} />
            <p className="my-4 text-[#e9e8e7] w-[60%] text-xl mx-4">
              <Link to="https://blog.openreplay.com/understanding-event-bubbling-and-capturing/">
                Understanding Event Bubbling and Capturing
              </Link>
            </p>
          </div>
          <div className="lg:w-[50%] flex justify-between mx-3 lg:mx-12 my-8">
            <img src={Shorthand} alt="" width={"40%"} />
            <p className="my-4 text-[#e9e8e7] w-[60%] text-xl mx-4">
              <Link to="https://blog.openreplay.com/top-javascript-shorthand-techniques/">
                Top JavaScript Shorthand Techniques
              </Link>
            </p>
          </div>
        </div>
        <div className="w-[100%] lg:flex justify-between my-6">
          <div className="lg:w-[50%] flex justify-between mx-3 lg:mx-12 my-8">
            <img src={PsychologyOfCoding} alt="" width={"40%"} />
            <p className="my-4 text-[#e9e8e7] w-[60%] text-xl mx-4">
              <Link to="https://blog.openreplay.com/the-psychology-of-coding--understanding-motivation-and-burnout/">
                The Psychology of coding - understanding Motivation and Burnout
              </Link>
            </p>
          </div>
          <div className="lg:w-[50%] flex justify-between mx-3 lg:mx-12 my-8">
            <img src={Inheritance} alt="" width={"40%"} />
            <p className="my-4 text-[#e9e8e7] w-[60%] text-xl mx-4">
              <Link to="https://blog.openreplay.com/inheritance-in-javascript-object-oriented-programming/">
                Inheritance In JavaScript Object-Oriented Programming
              </Link>
            </p>
          </div>
        </div>
        <div className="w-[100%] lg:flex justify-between my-6">
          <div className="lg:w-[50%] flex justify-between mx-3 lg:mx-12 my-8">
            <img src={Tutoring} alt="" width={"40%"} />
            <p className="my-4 text-[#e9e8e7] w-[60%] text-xl mx-4">
              <Link to="https://blog.openreplay.com/tutoring-in-tech--sharing-knowledge-and-earning-money/">
                Tutoring In Tech: Sharing Knowledge and Earning Money
              </Link>
            </p>
          </div>
          <div className="lg:w-[50%] flex justify-between mx-3 lg:mx-12 my-8">
            <img src={MemoryManagement} alt="" width={"40%"} />
            <p className="my-4 text-[#e9e8e7] w-[60%] text-xl mx-4">
              <Link to="https://code.pieces.app/blog/memory-management-introduction-to-how-weak-references-work-in-javascript">
                Memory Management: Introduction to Weak References in JavaScript
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
