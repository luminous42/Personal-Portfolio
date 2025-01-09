import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-black font-semibold">Portfolio</span>
          <div className="flex space-x-14 text-black">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Projects</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
