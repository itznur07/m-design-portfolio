import React from "react";

const Button = ({name}) => {
  return (
    <>
      <div className='w-32 h-11 flex justify-center items-center bg-[#0db760] rounded-md'>
        <span className='text-md text-[#fff] font-medium cursor-pointer'>
          {name}
        </span>
      </div>
    </>
  );
};

export default Button;
