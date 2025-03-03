"use client";
import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { assets, infoList, toolsData } from "../../../assets/assets";
import Image from "next/image";

export default function AboutPage() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  return (
    <div className="bg-white text-gray-900 dark:bg-darkTheme dark:text-white min-h-screen">
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-20 max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl font-Ovo mb-6">About Me</h1>
            <p className="text-lg mb-8 font-Ovo">
              I am an experienced Fullstack Developer with over a year of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {infoList.map(({ icon, title, description, iconDark }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl"
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-10 h-10 mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:sticky lg:top-24"
          >
            <Image
              src={assets.user_image}
              alt="Profile"
              className="rounded-2xl w-full max-w-md mx-auto shadow-xl"
            />

            <div className="mt-12">
              <h2 className="text-2xl font-Ovo mb-6">Tools & Technologies</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {toolsData.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image src={tool} alt="Tool" className="w-8 h-8" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
