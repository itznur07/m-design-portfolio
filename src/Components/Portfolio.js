import React from "react";
import Button from "./Button";

// import img & icons
import dotsl from "../assets/img/dots-l.png";
import w1 from "../assets/img/w1.png";
import w2 from "../assets/img/w2.png";
import w3 from "../assets/img/w3.png";
import TagButton from "./TagButton";

const Portfolio = () => {
  return (
    <>
      <div className='absolute top-4/5 left-0'>
        <img src={dotsl} alt='site-dots-img' />
      </div>
      <div className='flex items-center justify-between gap-16 h-96 mt-32'>
        <div className='flex flex-col gap-6'>
          <TagButton name="Portfolio" />
          <p className='text-4xl font-bold leading-snug'>
            My Creative Work <br />
            Latest <span className='text-[#0db760]'>Project</span>
          </p>
          <p className='text-[#000] text-sm'>
            I’m specialist in UI/UX Designe. My passion is designing & solving{" "}
            problems through user <br /> experience and research.
          </p>
          <div className='cursor-pointer'>
            <Button name='Show me' />
          </div>
        </div>
        <div className='flex items-center'>
          <img
            className='w-96 rounded-sm shadow-sm'
            src={w1}
            alt='w1-img'
          />
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3 shadow-md overflow-hidden'>
              <img src={w2} className='w-56 grayscale transition ease-linear duration-300 delay-100 hover:grayscale-0' alt='w2-img' />
              <img src={w3} className='w-56 grayscale transition ease-linear duration-300 delay-100 hover:grayscale-0' alt='w3-img' />
            </div>
            <div className="flex items-center gap-5 text-3x text-[#0db760] cursor-pointer"><span>&#8592;</span><span>&#8594;</span></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
