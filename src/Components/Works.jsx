import { AnimatePresence, motion } from "framer-motion";
import { WORKS } from "../assets/workAssets/work";
import { useState } from "react";

const Works = () => {
  const [showProduct, setShowProduct] = useState(false);
  const [showYoutube, setShowYoutube] = useState(false);
  const [showPersonal, setShowPersonal] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const displayedProducts = showProduct
    ? WORKS.Product_Designs
    : WORKS.Product_Designs.slice(0, 12);

  const displayedYoutube = showYoutube
    ? WORKS.Youtube
    : WORKS.Youtube.slice(0, 12);

  const displayedPersonal = showPersonal
    ? WORKS.Personal_Works
    : WORKS.Personal_Works.slice(0, 12);

  const handleMouseEnter = (src, index) => {
    setHoveredImage(src);
    displayedProducts.forEach((_, idx) => {
      if (idx !== index) {
        document.querySelectorAll(`.product-${idx}`).forEach((img) => {
          img.style.filter = "blur(1px) brightness(50%)";
        });
      }
    });
  };
  const handleMouseLeave = () => {
    setHoveredImage(null);
    displayedProducts.forEach((_, idx) => {
      document.querySelectorAll(`.product-${idx}`).forEach((img) => {
        img.style.filter = "none";
      });
    });
  };
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <motion.section
      id="works"
      className="min-h-screen relative flex flex-col items-center justify-center p-5 md:p-10 pt-25 md:pt-25"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {hoveredImage && (
        <div
          className="fixed pointer-events-none bg-white/20 backdrop-blur-2xl shadow-lg shadow-black p-1 rounded-lg z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
          style={{
            top: cursorPosition.y - 100,
            left: cursorPosition.x - 100,
          }}
        >
          <img
            src={hoveredImage}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      )}

      <motion.h1
        className="text-5xl font-bold font-['Contten'] mb-8"
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        WORKS
      </motion.h1>

      <motion.h1
        className="text-2xl font-bold font-['Contten'] self-start ml-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Product Designs
      </motion.h1>
      <div className="max-w-7xl h-full w-full p-5 mb-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-6 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {displayedProducts.map((product, index) => (
              <motion.div
                key={index}
                className={`relative product-${index} ${
                  index % 3 === 0 ? "md:col-span-2 md:row-span-2" : "pb-[100%]"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src={product}
                  alt={`Photo ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg cursor-pointer transition-all duration-300 ease-out"
                  loading="lazy"
                  onClick={() => handleMouseEnter(product, index)}
                  onMouseLeave={() => handleMouseLeave()}
                  onMouseMove={handleMouseMove}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <button
          onClick={() => setShowProduct(!showProduct)}
          className="mt-4 px-6 py-2 border-2 border-amber-600 text-white rounded-xl hover:bg-amber-600 scale-100 hover:scale-110 transition-all duration-300 ease-out"
        >
          {showProduct ? "Show Less" : "View All"}
        </button>
      </div>

      <motion.h1
        className="text-2xl font-bold font-['Contten'] self-start ml-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Youtube & Instagram
      </motion.h1>
      <div className="max-w-7xl h-full w-full p-5 mb-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-6 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {displayedYoutube.map((product, index) => (
              <motion.div
                key={index}
                className={`relative product-${index} ${
                  index % 3 === 0 ? "md:col-span-2 md:row-span-2" : "pb-[100%]"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src={product}
                  alt={`Photo ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  onClick={() => handleMouseEnter(product, index)}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <button
          onClick={() => setShowYoutube(!showYoutube)}
          className="mt-4 px-6 py-2 border-2 border-amber-600 text-white rounded-xl hover:bg-amber-600 scale-100 hover:scale-110 transition-all duration-300 ease-out"
        >
          {showYoutube ? "Show Less" : "View All"}
        </button>
      </div>

      <motion.h1
        className="text-2xl font-bold font-['Contten'] self-start ml-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Personal Works
      </motion.h1>
      <div className="max-w-7xl h-full w-full p-5 mb-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-6 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {displayedPersonal.map((product, index) => (
              <motion.div
                key={index}
                className={`relative product-${index} ${
                  index % 3 === 0 ? "md:col-span-2 md:row-span-2" : "pb-[100%]"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src={product}
                  alt={`Photo ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  onClick={() => handleMouseEnter(product, index)}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <button
          onClick={() => setShowPersonal(!showPersonal)}
          className="mt-4 px-6 py-2 border-2 border-amber-600 text-white rounded-xl hover:bg-amber-600 scale-100 hover:scale-110 transition-all duration-300 ease-out"
        >
          {showPersonal ? "Show Less" : "View All"}
        </button>
      </div>
    </motion.section>
  );
};

export default Works;
