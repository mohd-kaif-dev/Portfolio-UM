import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "Adobe Creative Suite",
    "Graphic Design",
    "Branding",
    "UI/UX Design",
    "Web Design",
    "Print Design",
    "Digital Illustration",
    "Photography",
    "HTML/CSS",
    "JavaScript",
    "React",
    "UI Kit",
    "Sketch",
    "Figma",
    "InVision",
    "Zeplin",
    "Asana",
    "Trello",
    "Slack",
    "Microsoft Office",
    "Google Suite",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen relative flex flex-col items-center justify-center p-5 md:p-10 pt-25 md:pt-25"
    >
      <motion.h1
        className="text-6xl font-bold font-['Contten']"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>
      <div className="max-w-7xl h-full w-full p-5 pt-15">
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.li
              key={skill}
              className="bg-neutral-800 p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg font-semibold text-white">{skill}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Skills;
