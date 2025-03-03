"use client";
import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { assets, workData } from "../../../assets/assets";
import Image from "next/image";

export default function WorkPage() {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-Ovo mb-6">My Work</h1>
          <p className="text-lg max-w-3xl mx-auto font-Ovo">
            Explore my portfolio of projects that showcase my expertise in
            different technologies and demonstrate my problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div
                className="aspect-square bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black bg-opacity-75 p-6 flex flex-col justify-end text-white"
              >
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex items-center gap-4">
                  <a
                    href={project.demoLink}
                    className="px-4 py-2 bg-white text-black rounded-full text-sm hover:bg-gray-100 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
