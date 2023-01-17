import React from "react";
import Banner from "../Components/Banner";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Portfolio from "../Components/Portfolio";
import Reviews from "../Components/Reviews";
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
      <Reviews />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
