import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import DiceMed from "../Components/DiceMed";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <DiceMed />
    </div>
  );
};

export default Home;
