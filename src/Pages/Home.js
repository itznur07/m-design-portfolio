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
      <div className='mx-28'>
        <Navbar />
        <Banner />
        <Rewards />
        <Skills />
        <Portfolio />
        <Reviews />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
