import React from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Portfolio from "../Components/Portfolio";
import Rewards from "../Components/Rewards";
import Skills from "../Components/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Rewards />
      <Skills />
      <Portfolio />
    </>
  );
};

export default Home;
