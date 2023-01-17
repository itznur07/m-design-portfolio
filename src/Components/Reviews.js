import React from "react";

// import icons & img
import { FaStar } from "react-icons/fa";
import p1 from "../assets/img/men1.png";
import p2 from "../assets/img/men2.png";
import p3 from "../assets/img/men3.png";

const Reviews = () => {
  return (
    <>
      <div className='flex flex-col gap-10 h-96 mt-32'>
        <div className='flex flex-col gap-6'>
          <p className='text-md text-[#0db760] font-medium'>Reviews</p>
          <p className='text-4xl font-bold leading-snug'>
            Our Customer Say
            <br />
            Something <span className='text-[#0db760]'>About Us</span>
          </p>
        </div>
        <div className='flex items-center justify-between gap-5'>
          <ReviewCard
            star={<FaStar />}
            about={`We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company`}
            img={p1}
            pname='Alim Ahmed'
            jobtitle='Ui Designer'
          />
          <ReviewCard
            star={<FaStar />}
            about={`We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company`}
            img={p2}
            pname='Salim Ahmed'
            jobtitle='Frontend Engeeniar'
          />
          <ReviewCard
            star={<FaStar />}
            about={`We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company`}
            img={p3}
            pname='Guy Hawkins'
            jobtitle='Product Manager'
          />
        </div>
      </div>
    </>
  );
};

const ReviewCard = ({ star, about, img, pname, jobtitle }) => {
  return (
    <div className='flex flex-col gap-4 max-w-md shadow-md rounded-sm px-3 py-3'>
      <div className='flex items-center gap-2 text-md text-[#F7D000]'>
        <i>{star}</i>
        <i>{star}</i>
        <i>{star}</i>
        <i>{star}</i>
        <i>{star}</i>
      </div>
      <p className='text-sm'>{about}</p>
      <div className='flex items-center gap-3'>
        <img src={img} alt='p-img' />
        <p className='flex flex-col'>
          <span className='text-md font-medium'>{pname}</span>{" "}
          <span className='text-sm text-medium'>{jobtitle}</span>
        </p>
      </div>
    </div>
  );
};

export default Reviews;
