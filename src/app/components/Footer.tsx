import Image from "next/image";
import React from "react";
import { assets } from "../../../assets/assets";
interface NavBarProps {
  isDarkMode: boolean;
}
const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={assets.mail_icon}
            alt=""
            className="w-6"
          />
          lumi9259@gmail.com
        </div>
      </div>

      <div
        className="text-center sm:flex items-center justify-between
      border-t border-gray-400 mx-[10%] mt-12 py-6"
      >
        <p>2025 Luminous Suwal. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 ">
          <a
            target="_blank"
            href="https://github.com/luminous42"
          >
            GitHub
          </a>
          <a
            target="_blank"
            href="https://github.com/luminous42"
          >
            Linkedin
          </a>
          <a
            target="_blank"
            href="https://github.com/luminous42"
          >
            Instagram
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
