import React from "react";

// import logo
import logo from "../assets/img/Logo.png";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-96 py-4">
        <div>
          <img className='w-36' src={logo} alt='logo' />
        </div>
        <div>
          <nav>
            <ul className='flex items-center gap-16 text-md text-[#000] font-medium cursor-pointer'>
              <li className='hover:text-[#0db760]'>Home</li>
              <li className='hover:text-[#0db760]'>Skills</li>
              <li className='hover:text-[#0db760]'>Portfolio</li>
              <li className='hover:text-[#0db760]'>Contact us</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Footer;
