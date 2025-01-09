import React from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";

const Hero = () => {
  return (
    <div className="bg-white bg-cover bg-center h-screen">
      <NavBar />
      <Dashboard />
    </div>
  );
};

export default Hero;
