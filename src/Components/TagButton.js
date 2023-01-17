import React from "react";

const TagButton = ({ name }) => {
  return (
    <div>
      <button className='px-2 py-1 border border-[#0db760] text-[#0db760] rounded-full'>
        {name}
      </button>
    </div>
  );
};

export default TagButton;
