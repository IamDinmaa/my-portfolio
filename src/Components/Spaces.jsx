import React, { useEffect, useRef } from "react";
import Dictionary from "../Images/Dictionary.png";
import FindingBalance from "../Images/FindingBalance.JPG";
import Networking from "../Images/Networking.JPG";
import ImposterSyndrome from "../Images/ImposterSyndrome.JPG";
import TechnicalWriting from "../Images/TechnicalWriting.JPG";
import { Link } from "react-router-dom";

// https://x.com/chidinmanwakor/status/1607813391611236353?s=46

// Getting into TW

// //
// https://x.com/chidinmanwakor/status/1804544900765040935?s=46

// Building tech Skillset

import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

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
    <div ref={ref} className="my-6" id="spaces">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}>
        <div className="mx-2  font-extrabold text-5xl flex justify-center  ">
          <h1 className="my-4 text-[#B0A593]">Spaces</h1>
        </div>
        <div className="lg:flex justify-between w-[100%] my-6 lg:my-24 px-6 text-justify text-wrap">
          <div className="lg:text-justify lg:text-wrap lg:w-[50%]  mx-2">
            <div className="lg:flex justify-between w-[full]">
              <h1 className="font-bold my-2 text-[#B0A593] lg:w-[70%]">
                The Impact Networking has on your Tech Career
              </h1>
            </div>
            <p className="my-4 lg:mr-12  text-white">
              I hosted an international Twitter Space on "The Impact Networking
              Has on Your Tech Career" as part of my bi-weekly series. Attendees
              from various regions joined to discuss the crucial role of
              networking in tech. Our speakers shared valuable insights on
              building professional connections and leveraging networking for
              career growth. Key takeaways included actionable tips on how to
              approach networking with confidence and use it as a tool for
              career advancement. The space provided attendees with valuable
              insights on enhancing their networking skills and navigating their
              tech careers more effectively.
            </p>
            <Link to="https://x.com/chidinmanwakor/status/1796934617603129768?s=46">
              <div className="flex justify-between lg:w-[50%]">
                <p className="text-[#cb9f59]">Listen to the recording</p>
              </div>
            </Link>
          </div>
          <div className="w-[full] lg:w-[40%] my-4 lg:my-0 h-[90%]">
            <Link to="https://x.com/chidinmanwakor/status/1796934617603129768?s=46">
              <img
                className="outline-none"
                src={Networking}
                alt=""
                width={"100%"}
                height={"100%"}></img>
            </Link>
          </div>
        </div>
        <div className="lg:flex justify-between w-[100%] my-6 lg:my-24 px-6 text-justify text-wrap">
          <div className="lg:text-justify lg:text-wrap lg:w-[50%]  mx-2">
            <div className="lg:flex justify-between w-[full]">
              <h1 className="font-bold my-2 text-[#B0A593] lg:w-[70%]">
                Finding balance, prioritizing tasks, and optimizing your Tech
                Growth.
              </h1>
            </div>
            <p className="my-4 lg:mr-12  text-white">
              Attendees from diverse regions joined to discuss the crucial
              aspects of managing time, setting priorities, and maximizing their
              development in the tech industry. The speakers shared practical
              tips and personal strategies for maintaining a healthy work-life
              balance, effectively prioritizing tasks, and continuously
              advancing their tech skills. Key takeaways included actionable
              advice on time management, goal setting, and leveraging tools and
              techniques for sustained growth. The space provided valuable
              insights for attendees to enhance their productivity and thrive in
              their tech careers.
            </p>
            <Link to="https://x.com/chidinmanwakor/status/1671941478489227265?s=46">
              <div className="flex justify-between lg:w-[50%]">
                <p className="text-[#cb9f59]">Listen to the recording</p>
              </div>
            </Link>
          </div>
          <div className="w-[full] lg:w-[40%] my-4 lg:my-0 h-[90%]">
            <Link to="https://x.com/chidinmanwakor/status/1671941478489227265?s=46">
              <img
                className="outline-none"
                src={FindingBalance}
                alt=""
                width={"100%"}
                height={"100%"}></img>
            </Link>
          </div>
        </div>
        <div className="lg:flex justify-between w-[100%] my-6 lg:my-24 px-6 text-justify text-wrap">
          <div className="lg:text-justify lg:text-wrap lg:w-[50%]  mx-2">
            <div className="lg:flex justify-between w-[full]">
              <h1 className="font-bold my-2 text-[#B0A593] lg:w-[70%]">
                Getting into Technical writing and Getting paid from it
              </h1>
            </div>
            <p className="my-4 lg:mr-12 text-white">
              This space was Inspired by a viral post I made on Twitter that
              garnered over 400k impressions, I hosted a Space on "Getting into
              Technical Writing and Getting Paid from It." The overwhelming
              response and numerous questions from the community about how to
              start a career in technical writing motivated this event. The
              speakers shared their journeys, insights, and steps for breaking
              into technical writing. Key discussions included identifying
              opportunities, building a portfolio, and monetizing writing
              skills. Attendees from diverse regions gained valuable knowledge
              on how to embark on their technical writing careers and turn their
              passion into a profitable venture.
            </p>
            <Link to="https://x.com/chidinmanwakor/status/1607813391611236353?s=46">
              <div className="flex justify-between lg:w-[50%]">
                <p className="text-[#cb9f59]">Listen to the recording</p>
              </div>
            </Link>
          </div>
          <div className="w-[full] lg:w-[40%] my-4 lg:my-0 h-[90%]">
            <Link to="https://x.com/chidinmanwakor/status/1607813391611236353?s=46">
              <img
                className="outline-none"
                src={TechnicalWriting}
                alt=""
                width={"100%"}
                height={"100%"}></img>
            </Link>
          </div>
        </div>
        <div className="lg:flex justify-between w-[100%] my-6 lg:my-24 px-6 text-justify text-wrap">
          <div className="lg:text-justify lg:text-wrap lg:w-[50%]  mx-2">
            <div className="lg:flex justify-between w-[full]">
              <h1 className="font-bold my-2 text-[#B0A593] lg:w-[70%]">
                Overcoming Imposter Syndrome
              </h1>
            </div>

            <p className="my-4 lg:mr-12  text-white">
              We explored the challenges and solutions related to imposter
              syndrome in the tech industry. The speakers shared their
              experiences and offered practical strategies for recognizing and
              managing these feelings. Takeaways included methods for building
              self-confidence, seeking support from mentors and peers, and
              developing a growth mindset. The space gave attendees insights on
              overcoming imposter syndrome and thriving in their tech careers.
            </p>
            <Link to="https://x.com/chidinmanwakor/status/1809225778267030002?s=46">
              <div className="flex justify-between lg:w-[50%]">
                <p className="text-[#cb9f59]">Listen to the recording</p>
              </div>
            </Link>
          </div>
          <div className="w-[full] lg:w-[40%] my-4 lg:my-0 h-[90%]">
            <Link to="https://x.com/chidinmanwakor/status/1809225778267030002?s=46">
              <img
                className="outline-none"
                src={ImposterSyndrome}
                alt=""
                width={"100%"}
                height={"100%"}></img>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
