"use client";
import Image from "next/image";
import hero from "../../../../public/images/home/hero.webp";
const Hero_home = () => {
  return (
    <>
      <div className="w-full  md:h-[62vw] relative">
        <div className="absolute w-full h-full overflow-hidden top-0 left-0">
          <Image
            src={hero}
            alt="hero image"
            className="absolute_center absolute w-full h-fit"
          />
        </div>
      </div>
    </>
  );
};

export default Hero_home;
