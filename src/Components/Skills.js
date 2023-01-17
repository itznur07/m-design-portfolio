import React from "react";
import Button from "./Button";

// import img & icons
import { FaCode, FaFigma, FaReact } from "react-icons/fa";
import dotsr from '../assets/img/dots-r.png';


const Skills = () => {
  return (
    <>
    <div className="absolute top-4/5 right-0">
      <img src={dotsr} alt="site-dots-img" />
    </div>
      <div className='flex items-center justify-between gap-28 h-96'>
        <div className='flex flex-col gap-6'>
          <p className='text-md text-[#0db760] font-medium'>My Skills</p>
          <p className='text-4xl font-bold leading-snug'>
            Why Hire Me For Your <br />
            Next <span className='text-[#0db760]'>Project?</span>
          </p>
          <p className='text-[#000] text-sm'>
            I’m specialist in UI/UX Designe. My passion is designing  & solving{" "} problems through user <br /> experience and research.
          </p>
          <div className='cursor-pointer'>
            <Button name='Contact me' />
          </div>
        </div>
        <div className='flex items-center gap-8'>
          <div className='flex flex-col items-center gap-16'>
            <Card
              icon={<FaReact />}
              title='React Native'
              about='Create user interface design with unique & modern ideas'
            />
            <Card
              icon={<FaFigma />}
              title='Figma'
              about='Create user interface design with unique & modern ideas'
            />
          </div>
          <div>
            <Card
              icon={<FaCode />}
              title='MERN Stack'
              about='Create user interface design with unique & modern ideas'
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ icon, title, about }) => {
  return (
    <>
      <div className='flex flex-col gap-2 shadow-md hover:shadow-lg px-5 py-4 rounded-sm'>
        <i className='text-xl text-[#0db760]'>{icon}</i>
        <p className='text-md font-medium'>{title}</p>
        <p className='text-sm'>{about}</p>
      </div>
    </>
  );
};

export default Skills;
