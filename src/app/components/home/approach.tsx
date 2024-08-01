"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedLines: React.FC = () => {
  const fullPath =
    "M.3 7.1a1 1 0 0 0 0 1.5l6.3 6.3a1 1 0 0 0 1.5-1.4L2.4 8l5.7-5.7A1 1 0 0 0 6.7.8L.3 7Zm1237.4 1.5c.4-.4.4-1 0-1.4l-6.2-6.5a1 1 0 0 0-1.5 0 1 1 0 0 0 0 1.4l5.6 5.7-5.8 5.6a1 1 0 0 0 0 1.4c.4.4 1 .4 1.4 0l6.5-6.2Zm-612.8 52 .8-.5-.8.6Zm-34.6 49.6-1-.2 1 .2Zm19.1-46-.8-.5.8.5ZM588 138.8l-1 .1h1Zm1.9-26.6 1 .2-1-.2Zm-.4 54h1-1Zm50.6 18.5.7.7-.7-.7Zm8.4-19.1h-1 1Zm-8 18.8-.8-.7.7.7Zm9.6-48.6h1-1ZM1 7.8v1a15875 15875 0 0 1 79.8.3c48.1 0 112.6.3 178 .5 130.9.5 265.6 1.3 281.3 2.1l.1-2c-15.7-.8-150.6-1.6-281.4-2A175778.1 175778.1 0 0 0 2.5 6.8H1.4a15725.9 15725.9 0 0 0-.4 0v1Zm539.1 4a69 69 0 0 1 25.1 7c8.7 3.8 17.4 8.8 25.2 13.8A302.2 302.2 0 0 1 617 51.8l.4.3.1.1.7-.8.6-.7-.1-.1a62.6 62.6 0 0 0-2-1.6A270.7 270.7 0 0 0 566 16.9c-8.8-4-17.7-6.7-25.8-7.2v2Zm109 124-1.6 29.7 2 .2 1.6-29.8-2-.1Zm-9.4 47.9-.3.3 1.4 1.4.4-.3-1.5-1.4Zm-49.2-17.5-1.5-27.4-2 .1 1.5 27.4 2-.1Zm27.7-114.8.6.8.4-.3a174.1 174.1 0 0 1 6-4.5c4-3 9.9-7 16.8-11.4 13.8-8.8 32.1-19 50-24.3l-.6-2a219.5 219.5 0 0 0-50.5 24.6 332.3 332.3 0 0 0-23 16l-.3.3.6.8Zm73.7-39.7a64 64 0 0 1 11.9-1.8c5.7-.6 13-1 21.6-1.4 17.4-.9 40.2-1.4 66.6-1.8 52.8-.8 119.9-.8 185.8-.5a25671 25671 0 0 1 257.7 2.6h1.5l.1-1v-1h-1.5a9410.6 9410.6 0 0 0-78.7-1c-48.3-.6-113-1.3-179-1.6-66-.3-133-.3-185.8.5-26.4.4-49.3 1-66.6 1.8-8.7.4-16 .9-21.8 1.4-5.7.5-9.9 1.1-12.2 1.9l.5 1.9ZM591 112.4l.4-2-2-.4-.4 2 2 .4Zm19.4-47.6L619 52l-1.7-1.1-8.7 12.8 1.7 1.1Zm7-12.8 6.8 9.2 1.6-1.1-6.7-9.3-1.6 1.2Zm6.8 9.2a136.2 136.2 0 0 1 23.6 54.2l2-.4c-3.9-19.9-12-38.6-24-55l-1.6 1.2Zm-32.8 49.2a123 123 0 0 1 19-45.6l-1.7-1.1a126 126 0 0 0-19.3 46.3l2 .4Zm-2.3 28.4c-.4-8.8.2-17.7 1.9-26.4l-2-.4c-1.7 8.9-2.4 17.9-1.9 26.9l2-.1Zm8.6 44.6a28.3 28.3 0 0 1-7-17.2l-2 .1a30 30 0 0 0 7.6 18.5l1.4-1.4Zm41.8.6a28.3 28.3 0 0 1-41.8-.6l-1.4 1.4a30.3 30.3 0 0 0 44.6.6l-1.4-1.4Zm8-18.5a28.7 28.7 0 0 1-7.7 18.2l1.5 1.4c5-5.3 7.9-12.2 8.3-19.4l-2-.2Zm3.7-29.6c.4-7 0-14-1.4-21l-2 .5a82.7 82.7 0 0 1 1.4 20.4h2Z";

  const [animationStage, setAnimationStage] = useState(0);

  const handleClick = () => {
    setAnimationStage((prev) => (prev + 1) % 4); // 0, 1, 2, 3 (3 resets to 0)
  };

  const getPathLength = () => {
    switch (animationStage) {
      case 0:
        return 0;
      case 1:
        return 0.5;
      case 2:
        return 0.75;
      case 3:
        return 1;
      default:
        return 0;
    }
  };

  return (
    <div className="w-full flex flex-col items-center md:py-[10vw]">
      <button
        onClick={handleClick}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {animationStage === 3 ? "Reset" : "Continue Animation"}
      </button>
      <svg
        width="90%"
        height="100%"
        viewBox="0 0 1238 195"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={fullPath}
          stroke="#4F0A19"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: getPathLength() }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};

export default AnimatedLines;
