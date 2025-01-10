"use client";
import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

const page = () => {
  return (
    <div>
      <>
        <NavBar />
        <Header />
        <About />
        <Services />
        <Work />
        <Contact />
      </>
    </div>
  );
};

export default page;
