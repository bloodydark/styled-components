import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isoOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isoOpen);
  };

  return (
    <>
      <Sidebar isOpen={isoOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection />
    </>
  );
};

export default Home;
