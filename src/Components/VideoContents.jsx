import React, { useEffect, useRef } from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

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
    <div ref={ref} className="my-12" id="videos">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}>
        <div className="mx-2  font-extrabold text-5xl flex justify-center">
          <h1 className="my-4 text-[#B0A593]">Video Contents</h1>
        </div>
        <div className="flex justify-center mx-2">
          <h1 className="text-[#e9e8e7]">
            From relating with developers via various means to also relating via
            vlogging. My skills brew up a storm😊
          </h1>
        </div>
        <div className="flex justify-center">
          <Link to="https://www.tiktok.com/@chidinmanwakor?_t=8oVaiKpNDmv&_r=1">
            <AiFillTikTok className="bg-[#25F4EE] text-[#FE2C55] text-7xl my-5 border-4 rounded-lg border-[#232229] mx-4" />
          </Link>
          <Link to="https://www.instagram.com/chidinma_nwakor?igsh=OGQ5ZDc2ODk2ZA==">
            <FaInstagramSquare className="bg-[#fff] text-[#DD2A7B] text-7xl my-5 border-4 rounded-lg border-[#232229] mx-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
