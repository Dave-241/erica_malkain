"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedLines: React.FC = () => {
  const [isHalfway, setIsHalfway] = useState(true);

  const handleButtonClick = () => {
    setIsHalfway((prev) => !prev);
  };

  const getPathLength1 = () => (isHalfway ? 0.5 : 1);
  const getPathLength2 = () => (isHalfway ? 0 : 1);

  return (
    <div className="w-full flex flex-col items-center md:py-[10vw]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="200"
        // viewBox="0 0 44 75"
      >
        <path
          // className="clef"
          fill="black"
          stroke="black"
          strokeWidth="0.1"
          className="relative"
          // mask="url(#mask1)"
          d={
            "M.3 7.1a1 1 0 0 0 0 1.5l6.3 6.3a1 1 0 0 0 1.5-1.4L2.4 8l5.7-5.7A1 1 0 06-43.3-16 43.3 1.9.7 16-43.3-1.8-.7Zm34.1-55.8c-.2 4.2-3.3 8.7-8.7 12.8-5.3 4-12.4 7.7-20 10.3-15.3 5.2-30 3.7-39.4-1l-.9 1.8c9.8 4.9 25 .1-8.1l-.2-2c-7.2-.4-14.4 3-19.3 8.5-6.3 6.8-11.4 16-14.2 25.7a55 55 0 0 0-1.8 24.8l2-.4ZM604 84.6c5.4-1 11.1-1.3 16.6-.9 5.5.4 10.8 1.4 15.5 2.9 9.5 2.9 17.7 7.2 23.3 11.3l1.2-1.6c-5.8-4.1-14.3-8.5-24.1-11.5a62 62 0 0 0-16.3-3.2 54.5 54.5 0 0 0-17.4.8l1.2 1.6Z"
          }
        >
          {" "}
          dkdiddidi and tht is then end of solomont grding
        </path>
        <circle
          cx="50"
          cy="55"
          r="45"
          fill="none"
          stroke="#F0CE01"
          strokeWidth="4"
        />
        <text textAnchor="middle" x="250" y="55">
          Circle Text and di
        </text>
      </svg>
    </div>
  );
};

export default AnimatedLines;
