import React from "react";
import AboutImage from "../assets/About1.webp";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center p-5 md:p-10 pt-25 md:pt-25"
    >
      <motion.h1
        className="text-5xl font-bold font-['Contten']"
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ABOUT
      </motion.h1>
      <div className="flex max-w-5xl flex-col md:flex-row">
        {/* Left Section - Photo */}
        <div className="w-full md:w-1/3 h-full p-5">
          <img
            src={AboutImage}
            alt="UM"
            className="w-full h-96 object-cover rounded-2xl border border-neutral-700 scale-100 hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-2/3 h-full p-5">
          <div className="border  border-neutral-700 rounded-2xl h-content font-['PP'] p-8 text-xl tracking-wider">
            <p className=" text-wrap mb-4">
              I’m Umar Masih, a passionate Graphic Designer with a keen eye for
              aesthetics and a deep love for visual storytelling. With 7+ years
              of experience in branding, digital design, and UI/UX.
            </p>
            <p className=" text-wrap mb-4">
              I specialize in creating bold, engaging, and impactful visuals
              that resonate with audiences. From crafting minimalist logos to
              designing immersive digital experiences
            </p>
            <p className=" text-wrap md:mb-8">
              My approach is always strategic and user-focused. I believe that
              good design isn’t just about looks—it’s about communication, and I
              strive to turn ideas into compelling visuals that leave a lasting
              impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
