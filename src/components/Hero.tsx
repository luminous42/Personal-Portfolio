import React from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";

const Hero = () => {
  return (
    <div className="bg-[url('https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png')] bg-cover bg-center h-screen">
      <NavBar />
      <Dashboard />
    </div>
  );
};

export default Hero;
