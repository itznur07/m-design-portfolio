import { motion } from "framer-motion";
import React, { useContext } from "react";
import { MotionContext } from "../MotinContext";

// import logo
import logo from "../assets/img/Logo.png";

const Navbar = () => {
  const { container, item2, item3 } = useContext(MotionContext);

  return (
    <>
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        className='flex items-center justify-between py-7'
      >
        <motion.div variants={item3}>
          <img className='w-36' src={logo} alt='logo' />
        </motion.div>
        <div>
          <nav>
            <ul className='flex items-center gap-16 text-md text-[#000] font-medium cursor-pointer'>
              <li className='hover:text-[#0db760]'>Home</li>
              <li className='hover:text-[#0db760]'>Skills</li>
              <li className='hover:text-[#0db760]'>Portfolio</li>
              <li className='hover:text-[#0db760]'>Testimonial</li>
            </ul>
          </nav>
        </div>
        <motion.div variants={item2} className='w-32 h-11 flex justify-center items-center border border-[#0DB760] rounded-md'>
          <span className='text-md text-[#000] font-medium cursor-pointer'>
            Download
          </span>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
