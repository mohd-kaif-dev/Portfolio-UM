import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import React from "react";

const Slider = () => {
  const words = ["ARTIST", "PHILOSOPHER", "DESIGNER", "WRITER", "PHOTOGRAPHER"];
  return (
    <div className="relative w-full font-['PP'] overflow-hidden h-12 md:h-24 bg-gradient-to-r from-transparent via-white/70 to-transparent text-neutral-900 flex items-center">
      <motion.div
        className="flex space-x-2 md:space-x-4 text-2xl md:text-6xl whitespace-nowrap"
        animate={{ x: ["10%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        style={{ minWidth: "200%" }} // Ensures seamless looping
      >
        {[...words, ...words, "ARTIST", "PHILOSOPHER"].map((word, index) => (
          <span key={index} className="flex items-center space-x-4">
            {word}
            <Dot className="text-neutral-900 w-16 h-16 inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
