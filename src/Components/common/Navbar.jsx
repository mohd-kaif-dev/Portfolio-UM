import { useState } from "react";
import { motion } from "framer-motion";
import { AlignRight, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className="fixed top-5 left-5 right-5 md:top-10 md:left-20 md:right-20 z-50"
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <nav className="flex justify-between items-center backdrop-blur-md bg-black/30 rounded-xl  border border-neutral-700 text-white py-2 px-4">
        <div className="text-2xl font-bold font-['Contten']">
          <a href="#home" onClick={handleClick}>
            UM
          </a>
        </div>
        <button
          className="md:hidden w-8 h-8  text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="cursor-pointer" />
          ) : (
            <AlignRight className="cursor-pointer" />
          )}
        </button>
        <ul className="hidden md:flex space-x-5 font-semibold tracking-widest font-['Blanck']">
          <li>
            <a
              className="hover:text-neutral-400 hover:scale-105 inline-block transform transition-transform duration-300"
              href="#about"
              onClick={handleClick}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              className="hover:text-neutral-400 hover:scale-105 inline-block transform transition-transform duration-300"
              href="#works"
              onClick={handleClick}
            >
              WORKS
            </a>
          </li>
          <li>
            <a
              className="hover:text-neutral-400 hover:scale-105 inline-block transform transition-transform duration-300"
              href="#skills"
              onClick={handleClick}
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              className="hover:text-neutral-400 hover:scale-105 inline-block transform transition-transform duration-300"
              href="#contact"
              onClick={handleClick}
            >
              CONTACT
            </a>
          </li>
        </ul>

        {/* Mobile Nav Links */}
        <div
          className={`md:hidden fixed w-full h-fit top-14 left-0 right-0 bg-black/60 backdrop-blur-2xl z-40 rounded-2xl transition-all duration-500 ease-in-out ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-[200%] opacity-0"
          }`}
        >
          <div>
            <ul className="font-semibold tracking-widest font-['Blanck'] text-2xl">
              <li className="hover:bg-neutral-200  hover:text-neutral-900  px-4 py-2 rounded-t-2xl">
                <a href="#about" onClick={handleClick}>
                  ABOUT
                </a>
              </li>
              <li className="hover:bg-neutral-200 hover:text-neutral-900  px-4 py-2">
                <a href="#works" onClick={handleClick}>
                  WORKS
                </a>
              </li>
              <li className="hover:bg-neutral-200 hover:text-neutral-900 px-4 py-2">
                <a href="#skills" onClick={handleClick}>
                  SKILLS
                </a>
              </li>
              <li className="hover:bg-neutral-200 hover:text-neutral-900 px-4 py-2 rounded-b-2xl">
                <a href="#contact" onClick={handleClick}>
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
