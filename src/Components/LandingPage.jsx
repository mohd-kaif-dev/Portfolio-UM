import React from "react";

import SplitText from "./ui/SplitText";
import TextPressure from "./ui/TextPressure";
import Squares from "./ui/Sqaures";
import Aurora from "./ui/Aurora";
import Orb from "./ui/orb";
import CircularText from "./ui/CircularText";
import { ChevronsDown, Mouse } from "lucide-react";
import { motion } from "framer-motion";

const LandingPage = () => {
  const handleClick = (e) => {
    e.preventDefault();

    const target = e.currentTarget.getAttribute("href");
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center mb-8 select-none  "
    >
      <div className="absolute inset-0 z-1 ">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      {/* Main Section */}
      <div className="flex flex-col text-white uppercase w-full h-full font-['Boldonse'] items-center justify-center z-10">
        <SplitText
          text="Portfolio  of"
          className="text-lg md:text-2xl font-bold ml-10 tracking-[0.7rem] md:tracking-[4rem] mb-4 md:mb-0"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={() => {
            const textPressure = document.querySelector(".text-pressure");
            textPressure.style.opacity = "1";
            textPressure.style.transform = "translateX(0px)";
          }}
        />

        <div
          className="text-pressure transition-all duration-500"
          style={{
            position: "relative",
            height: "300px",
            width: "80%",
            opacity: 0,

            transform: "translateX(-100px)",
          }}
        >
          <TextPressure
            text="Umar Masih"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
      </div>
      {/* HIRE ME */}
      <motion.div
        className="absolute right-5 bottom-13 md:bottom-2 md:right-5 z-11 h-[120px] w-[120px] md:w-[200px] md:h-[200px] "
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, duration: 0.8, ease: "easeOut" }}
      >
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
        <h2 className="text-white text-[15px] md:text-lg absolute  top-[40%] left-[25%] z-1 cursor-pointer font-['Boldonse']">
          <a href="#contact" onClick={handleClick}>
            HIRE ME
          </a>
        </h2>
      </motion.div>
      {/* SCROLL MOUSE */}
      <motion.div
        className="absolute bottom-50 md:bottom-5 right-[48%] z-11 transition-colors duration-500"
        initial={{ y: 20, opacity: 0 }} // Initial fade-in + slide-up animation
        animate={{ y: 0, opacity: 1 }} // Final position after entering
        whileHover={{ y: [-2, 0, -2] }} // Creates bounce effect
        whileDrag={{ opacity: 0 }}
        transition={{
          delay: 3,
          duration: 0.8, // Keeps the original fade-in smooth
          ease: "easeOut",
          y: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }, // Faster bounce
        }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight + 180, behavior: "smooth" })
        }
      >
        <div className="flex flex-col gap-0.5 items-center justify-center  text-white/50 hover:text-white">
          <Mouse className="w-8 h-8" />
          <ChevronsDown className="w-5 h-5" />
        </div>
      </motion.div>

      {/* GRAPHIC DESIGNER TEXT */}
      <motion.div
        className="absolute bottom-15 md:bottom-2 left-5 md:left-10 z-11"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 3, duration: 0.8, ease: "easeOut" }}
      >
        <CircularText
          text="GRAPHIC*DESIGNER*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </motion.div>
    </section>
  );
};

export default LandingPage;
