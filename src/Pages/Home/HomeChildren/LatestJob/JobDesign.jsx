import React from 'react';
import{BiDollarCircle, BiMap} from 'react-icons/bi'
import {useNavigate } from 'react-router-dom';
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const JobDesign = ({ item }) => {
  const { image, jobTitle, companyName, workplace, salary, location, posts } =
    item;
  // aos annimation
  useEffect(() => {
    Aos.init();
  }, []);
   const navigate = useNavigate();
  return (
    <div className="cards rounded-lg">
      <div className="shadow-lg md:h-44 h-full p-4 md:p-6 mt-8 hover:shadow-2xl rounded-md bg-white w-full card">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-5">
          <div className="mb-4 md:mb-0 md:mr-4">
            <img className="h-20 w-20" src={image} alt="" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h1 className="md:text-2xl text-lg font-bold">{jobTitle}</h1>
            <h1>
              Company Name:{" "}
              <span className="font-semibold md:text-lg text-[15px]">
                {companyName}
              </span>
            </h1>
            <h1>{workplace}</h1>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <h1 className="flex items-center gap-1">
                <BiMap /> {location}
              </h1>
              <h1 className="flex items-center gap-1">
                <BiDollarCircle />
                {salary}/month
              </h1>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <div className="">
              <button
                onClick={() => navigate(`/jobApplyForm/${posts?._id}`)}
                className="px-4 w-32 py-2 banner text-white outline-0 rounded-md font-semibold"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDesign;