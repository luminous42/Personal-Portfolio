import React from "react";
import { motion } from "framer-motion";
import { assets, workData } from "../../../assets/assets";
import Image from "next/image";

interface NavBarProps {
  isDarkMode: boolean;
}

const Work: React.FC<NavBarProps> = ({ isDarkMode }) => {
  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
        <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Welcome to my development portfolio! Explore a collection of projects
          showcasing my expertise in different tech stacks.
        </p>
      </motion.div>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.03 }}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div
              className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between
            duration-500 group-hover:bottom-7"
            >
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div
                className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]
              group-hover:bg-lime-300 transition"
              >
                <Image src={assets.send_icon} alt="send_icon" className="w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.a
        href=""
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.05 }}
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20
        hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
