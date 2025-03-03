"use client";
import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { assets, serviceData } from "../../../assets/assets";
import Image from "next/image";

export default function ServicesPage() {
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
          <h1 className="text-5xl font-Ovo mb-6">My Services</h1>
          <p className="text-lg max-w-3xl mx-auto font-Ovo">
            I offer a comprehensive range of development services, leveraging
            cutting-edge technologies to deliver exceptional solutions for your
            digital needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map(({ icon, title, description, link }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="p-8 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-xl transition-all"
            >
              <Image src={icon} alt={title} className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {description}
              </p>
              <a
                href={link}
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Learn more
                <Image src={assets.right_arrow} alt="" className="w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-Ovo mb-8">Need a Custom Solution?</h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
          >
            Get in Touch
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>
        </motion.div>
      </motion.div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
