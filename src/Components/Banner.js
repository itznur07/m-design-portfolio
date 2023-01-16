import React from "react";
import Button from "./Button";

// import image
import bgImg from "../assets/img/bg1.png";
import bgdots from "../assets/img/bgdots.png";

// import icons
import { AiOutlineLine } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Banner = () => {
  return (
    <>
    <div className="absolute top-24 left-10 w-1/4 -z-10"><img src={bgdots} alt="bg-dots"/></div>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-6'>
          <p className='text-md text-[#0db760] font-medium'>Welcome</p>
          <p className='text-5xl font-bold leading-snug'>
            I have <span className='text-[#0db760] '>Creative</span> <br />{" "}
            <span className='text-[#0db760]'>Design</span> Experience
          </p>
          <p className="text-[#000] text-sm">
            I’m Tanvir, a creative Product Designer. I’ve been helping
            businesses <br /> to solve their problems with my design for 2
            years.
          </p>
          <div className='flex items-center gap-5 cursor-pointer'>
            <Button name='Contact me' />
            <span className='text-md font-medium hover:text-[#0db760]'>
              View Portfolio{" "}
              <span className='text-md text-[#0db760] font-medium'>
                &#8599;
              </span>
            </span>
          </div>
        </div>
        <div className='flex items-center'>
          <div>
            <img src={bgImg} alt='banner-img' />
          </div>
          <div className='flex items-center flex-col gap-16 text-md text-[#0db760]'>
            <p className='flex items-center gap-3 transform rotate-90'>
              Follow me
              <span className=''>
                <AiOutlineLine />{" "}
              </span>
            </p>
            <div className='flex items-center flex-col gap-5 cursor-pointer'>
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
