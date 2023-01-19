import React from "react";
import Banner from "../Components/Banner";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Portfolio from "../Components/Portfolio";
import Reviews from "../Components/Reviews";
import Rewards from "../Components/Rewards";
import ScrollToTopButton from "../Components/ScrollToTop";
import Skills from "../Components/Skills";
import { MotionContext } from "../MotinContext";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const item2 = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const item3 = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Home = () => {
  return (
    <>
      <div className='mx-28 relative'>
        <MotionContext.Provider value={{ container, item, item2, item3 }}>
          <Navbar />
          <Banner />
          <Rewards />
          <Skills />
          <Portfolio />
          <Reviews />
          <ContactUs />
          <ScrollToTopButton />
          <Footer />
        </MotionContext.Provider>
      </div>
    </>
  );
};

export default Home;
