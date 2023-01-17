import React from "react";

// import icons
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FaSearchLocation } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className='h-96 mt-32'>
      <div className='flex flex-col gap-6 items-center'>
        <p className='text-md text-[#0db760] font-medium'>Contact</p>
        <p className='text-4xl font-bold leading-snug'>
          Let’s Discuss Your <span className='text-[#0db760]'>Project</span>
        </p>
        <p className='text-[#000] text-sm text-center'>
          Let’s make something new, different and more meaningful or make <br />{" "}
          thing more visual or conceptual
        </p>
      </div>
      {/* form */}
      <div className='h-96 mt-24 flex justify-around items-center'>
        {/* left */}
        <div className='flex flex-col gap-10'>
          <InfoCard
            icon={<BiPhoneCall />}
            name='Call me'
            value='+8801843966457'
          />
          <InfoCard
            icon={<AiOutlineMail />}
            name='Email me'
            value='nuruddinalways99@gmail.com'
          />
          <InfoCard
            icon={<FaSearchLocation />}
            name='Address'
            value='Chittagong, Bangladesh'
          />
        </div>
        {/* right */}
        <form className='flex flex-col  gap-5'>
          <div className='flex items-center gap-10'>
            <Input placeholder='Full Name' />
            <Input placeholder='Your Email' />
          </div>
          <div className='flex items-center gap-10'>
            <Input placeholder='Phone Number' />
            <Input placeholder='Your Buget' />
          </div>
          <div className=''>
            <textarea
              style={{
                width: "616px",
                height: "160px",
                border: "1px solid #000000",
                resize: "none",
                padding: "10px 30px",
                borderRadius: "5px",
                outline: "none",
              }}
              placeholder='Message'
            ></textarea>
            <div>
              <button className='px-4 py-2 bg-[#0db760] rounded-md text-md text-[#fff] '>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// call card
const InfoCard = ({ icon, name, value }) => {
  return (
    <div className='flex items-center gap-5'>
      <div className='bg-[#0db760] rounded-md p-3 text-xl text-[#fff]'>
        {icon}
      </div>
      <div className='flex flex-col gap-1'>
        <span className='text-sm'>{name}</span>
        <span className='font-medium text-md'>{value}</span>
      </div>
    </div>
  );
};

// input Component

const Input = ({ placeholder }) => {
  return (
    <div className='w-72 h-10 border border-[#000] flex items-center justify-center hover:border-[#0db760]'>
      <input
        className='outline-none border-none'
        type='text'
        placeholder={placeholder}
      />
    </div>
  );
};

export default ContactUs;