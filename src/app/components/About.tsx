import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { assets, infoList, toolsData } from "../../../assets/assets";

interface NavBarProps {
  isDarkMode: boolean;
}

const About: React.FC<NavBarProps> = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: false }}
      >
        About me
      </motion.h2>
      <motion.div
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <p className="mb-10 max-w-2xl font-Ovo">
            I am an experienced Fullstack Developer with over a year of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false }}
          >
            {infoList.map(({ icon, title, description, iconDark }, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: false }}
          >
            Tools I use
          </motion.h4>
          <motion.ul
            className="flex items-center gap-3 sm:gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer duration-500"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
      <motion.div className="text-center mt-12">
        <motion.a
          href="/about"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-8 py-3 border border-gray-500 rounded-full hover:bg-lightHover dark:hover:bg-darkHover transition-colors"
        >
          View Full Profile
          <Image
            src={
              isDarkMode
                ? assets.right_arrow_bold_dark
                : assets.right_arrow_bold
            }
            alt="Right arrow"
            className="w-4"
          />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default About;
