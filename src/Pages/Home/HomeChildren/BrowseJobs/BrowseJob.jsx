import React from 'react';
import Img from '../../../../../public/home.png'
import {FaBookmark, FaRegAddressCard} from 'react-icons/fa';
import { TfiEmail } from "react-icons/tfi";

const BrowseJob = () => {
    return (
        <div className='p-20 mb-10'>
         <div className='grid lg:grid-cols-2 gap-4'>
            <div className='space-y-4'>
                <h1 className='text-5xl font-bold'>Suits Jobs For You.</h1>
               <div className='border borderl'>
               <p className='pl-3 text-lg text-gray-400'>There are many variations of passages of Lorem Ipsum Fasts Fastsby humour, by injected humour, or coved ceilings.</p>
               </div>
               <div className='space-y-3 text-lg text-gray-400 pt-5'>
               <p className='flex items-center'>
               <span><FaBookmark></FaBookmark></span>
               <p className='pl-2'>Bookmark Jobs</p>
               </p>
               <p className='flex items-center'>
               <span><FaRegAddressCard></FaRegAddressCard></span>
                <p className='pl-2'>Apply with you Resume</p>
               </p>
                <p className='flex items-center'>
               <span><TfiEmail></TfiEmail></span>
                <p className='pl-2'>Get nofified</p>
               </p>
               </div>
               <div className='pt-6'>
               <button className="bg-green-500 py-2 px-6 rounded-sm text-white hover:bg-white hover:text-black  border border-green-500 text-lg flex justify-center items-center gap-3 duration-700">
                Browse Jobs{" "}
                <span>
                  
                </span>
              </button>
               </div>
            </div>
            <div>
               <div>
               <img src={Img} alt="" />
               </div>
              {/* <div className='justify-end -mt-20 '>
              <div className='border bg-white btn-explore'>
                  <p className='text-5xl font-extrabold text-[#00B04D]'>25+</p>
                 <div className='pl-28'>
                 <p className='text-lg'>Years of</p>
                  <p className='text-2xl'>Expreience</p>
                 </div> */}

            </div>
        </div>
       </div>
    );
};

export default BrowseJob;