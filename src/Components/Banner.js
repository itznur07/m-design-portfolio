import { motion } from "framer-motion";
import React from "react";

// import image
import bgImg from "../assets/img/bg1.png";
import bgdots from "../assets/img/bgdots.png";

// import icons
import { AiOutlineLine } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Button from "./Button";
import TagButton from "./TagButton";

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

const Banner = () => {
  return (
    <>
      <div className='absolute top-24 left-10 w-1/4 -z-10'>
        <img src={bgdots} alt='bg-dots' />
      </div>
      <div className='flex items-center justify-between'>
        <motion.div
          className='flex flex-col gap-6'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <motion.div variants={item}>
            <TagButton name='Welcome' />
          </motion.div>
          <motion.p variants={item} className='text-5xl font-bold leading-snug'>
            I have <span className='text-[#0db760] '>Creative</span> <br />{" "}
            <span className='text-[#0db760]'>Design</span> Experience
          </motion.p>
          <motion.p variants={item} className='text-[#000] text-sm'>
            I’m Tanvir, a creative Product Designer. I’ve been helping
            businesses <br /> to solve their problems with my design for 2
            years.
          </motion.p>
          <motion.div
            variants={container}
            className='flex items-center gap-5 cursor-pointer'
          >
            <motion.div variants={item}>
              <Button name='Contact me' />
            </motion.div>
            <motion.span
              variants={item}
              className='text-md font-medium hover:text-[#0db760]'
            >
              View Portfolio{" "}
              <span className='text-md text-[#0db760] font-medium'>
                &#8599;
              </span>
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div
          variants={container}
          initial='hidden'
          animate='visible'
          className='flex items-center'
        >
          <motion.div variants={item2}>
            <img src={bgImg} alt='banner-img' />
          </motion.div>
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
        </motion.div>
      </div>
    </>
  );
};

export default Banner;
