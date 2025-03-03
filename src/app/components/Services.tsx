import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { assets, serviceData } from "../../../assets/assets";

interface NavBarProps {
  isDarkMode: boolean;
}

const Services: React.FC<NavBarProps> = ({ isDarkMode }) => {
  return (
    <motion.div
      id="services"
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
        <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
        <h2 className="text-center text-5xl font-Ovo">My Services</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          I am an experienced Fullstack Developer with over a year of
          professional expertise in the field.
        </p>
      </motion.div>

      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover duration-500 hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/50">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
