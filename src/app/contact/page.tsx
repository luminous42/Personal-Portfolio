"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { assets } from "../../../assets/assets";
import Image from "next/image";

export default function ContactPage() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [result, setResult] = useState("");

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "963c5a6a-ac58-45ba-bbd6-381ecafc7eb4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
            className="lg:sticky lg:top-24"
          >
            <h1 className="text-5xl font-Ovo mb-6">Get in Touch</h1>
            <p className="text-lg mb-8 font-Ovo dark:text-gray-300">
              I'd love to hear from you! Whether you have a project in mind or
              just want to say hello, feel free to reach out.
            </p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <div className="p-3 bg-gray-100 dark:bg-darkHover rounded-full">
                  <Image
                    src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
                    alt="Email"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    lumi9259@gmail.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <div className="p-3 bg-gray-100 dark:bg-darkHover rounded-full">
                  <Image
                    src={isDarkMode ? assets.logo_dark : assets.logo}
                    alt="Location"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Kathmandu, Nepal
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.form
              onSubmit={onSubmit}
              className="space-y-6 bg-gray-50 dark:bg-darkHover p-8 rounded-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 
                    dark:bg-darkTheme focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 
                    dark:bg-darkTheme focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 
                  dark:bg-darkTheme focus:ring-2 focus:ring-primary outline-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-8 bg-black dark:bg-white text-white dark:text-black 
                rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Send Message
              </motion.button>

              {result && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-green-500"
                >
                  {result}
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </motion.div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
