import React from "react";

const CompMention = ({ tbtn, btn, t1, t2, t3 }) => {
  return (
    <>
      <div className='flex flex-col gap-6 '>
        {tbtn}
        <p className='text-4xl font-bold leading-snug'>
          {t1} <br />
          <span className='text-[#0db760]'> {t2}</span>
        </p>
        <p className='text-[#000] text-sm'>{t3}</p>
        <div className='cursor-pointer'>{btn}</div>
      </div>
    </>
  );
};

export default CompMention;
