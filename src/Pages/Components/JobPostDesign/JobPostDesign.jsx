import {
  FaCloudsmith,
  FaCommentAlt,
  FaFacebook,
  FaHandPointDown,
  FaLinkedin,
  FaRegBookmark,
  FaShare,
  FaShareAlt,
  FaSortNumericDownAlt,
  FaTwitter,
} from "react-icons/fa";

import { BiDollarCircle } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import useJobsBooksMarks from "../../../Hooks/useJobsBooksMarks";
import usePostShare from "../../../Hooks/usePostShare";
import Image from "../../../assets/images/images.jpg";
const JobPostDesign = ({ posts }) => {
    
    const [handleBookMark] = useJobsBooksMarks();
    const navigate = useNavigate();
    const [handleFacebookShare, handleLinkedinShare, handleTwitterShare] = usePostShare();

  return (
    <div className="grid grid-cols-1  dark:text-black">
      <div className=" bg-white shadow-lg rounded-md mt-5 p-6 border border-cyan-500">
        <div className="flex justify-end gap-2 mb-3 text-xl">
          <div className="dropdown dropdown-left  flex items-center">
            <label tabIndex={0}>
              <div className="flex items-center gap-1 z-50">
                <FaShareAlt size={20} className="cursor-pointer  text" />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
            >
              <button
                onClick={() => handleFacebookShare()}
                className="flex items-center gap-1 text-lg hover:bg-slate-200 w-full py-1 rounded-lg ps-2 font-semibold"
              >
                <FaFacebook />
                Facebook
              </button>
              <button
                onClick={() => handleLinkedinShare()}
                className="flex items-center gap-1 text-lg hover:bg-slate-200 w-full py-1 rounded-lg ps-2 font-semibold"
              >
                <FaLinkedin />
                LinkedinIn
              </button>
              <button
                onClick={() => handleTwitterShare()}
                className="flex items-center gap-1 text-lg hover:bg-slate-200 w-full py-1 rounded-lg ps-2 font-semibold"
              >
                <FaTwitter />
                Twitter
              </button>
            </ul>
          </div>
          <FaRegBookmark
            onClick={() => handleBookMark(posts)}
            className="cursor-pointer"
          />
        </div>
        <div className="lg:flex justify-between items-center mb-5">
          <div>
            <div className="flex items-center gap-3">
              <img
                className="h-16 w-16 border  border-blue-500 rounded-full"
                src={posts && posts ? posts?.userPhoto : Image}
                alt="img"
              />
              <div>
                <h1 className="font-semibold ">
                  Front-End Developer{posts?.position}
                </h1>
                {/* <h1>5 Days Left</h1> */}
                <h1 className="font-bold text-gray-600">
                  {moment().format("MMMM Do YYYY")}
                </h1>
              </div>
            </div>

            <div className="px-2 py-1 rounded-md">
              {/* <h1 className="font-semibold">Workplace</h1> */}
              <h1 className="bg-gray-200 lg:w-[300px] mt-3 text-center font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-cyan-500">
                {posts?.workplace}
              </h1>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={posts?.image}
              alt="Company Logo"
              className="w-20 h-20 rounded-md mr-4 border border-gray-400"
            />
            <div>
              <h2 className=" font-semibold text-gray-800">
                {posts?.jobTitle}
              </h2>
              <p className="text-gray-600 ">{posts?.companyName}</p>
              <p>{posts?.location}</p>
            </div>
          </div>
        </div>
        {/* quatitiy div */}
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-1/2 lg:mb-0 mb-3 lg:flex gap-9">
            <div className="space-y-1">
              <h1 className="flex items-center gap-1">
                <BiDollarCircle /> Salary : ${posts?.salary}/month
              </h1>
              <h1 className="flex items-center gap-1">
                <MdDateRange /> Closing date : 2023-09-14
              </h1>
            </div>
            <div className="space-y-1">
              <h1 className="flex items-center gap-1">
                <FaCloudsmith /> Experience : Freshers
              </h1>
              <h1 className="flex items-center gap-1">
                <FaSortNumericDownAlt /> Quantity : 3 Person
              </h1>
            </div>
          </div>
          <div className="lg:w-1/2 justify-end flex items-center gap-3 ">
            {/* <FaRegBookmark className="text-3xl cursor-pointer" /> */}
            <button
              onClick={() => navigate(`/jobApplyForm/${posts?._id}`)}
              className="bg-green-600 text-center text-white py-2 px-6 rounded-md hover:bg-blue-800  duration-300 lg:w-1/2 w-full  bg-gradient-to-r from-green-500 to-blue-700  font-semibold   hover:from-blue-700 hover:to-cyan-500 transition-all "
            >
              Apply Now
            </button>
          </div>
        </div>
        <hr className="my-5 border border-cyan-500" />
        {/* description div */}
        <div>
          {/* div-1 */}
          <div>
            <h3 className=" flex items-center gap-3 my-5 text-3xl font-semibold text-gray-800">
              Descriptions <FaHandPointDown />
            </h3>
            <h1 className="font-semibold text-xl">Overview:</h1>
            <p className="text-gray-600">{posts?.jobDescription}</p>
          </div>
          {/* div-2 */}
          <div className="my-5">
            <h1 className="font-semibold text-xl">Requirements : </h1>
            <div className="space-y-3 ml-5">
              <li>
                Be heavily involved in turning user stories into testable,
                maintainable and high-quality code. This is a hands-on code
                design and coding role!
              </li>
              <li>
                Be heavily involved in turning user stories into testable,
                maintainable and high-quality code. This is a hands-on code
                design and coding role!
              </li>
            </div>
          </div>
          {/* div-3 */}
          <div className="my-5">
            <h1 className="font-semibold text-xl">Skill & Experience: </h1>
            <div className="space-y-3 ml-5">
              <li>
                You have at least 3 years of experience working as a Product
                Designer.
              </li>
              <li>You have experience using Sketch and InVision or Framer X</li>
              <li>
                You are familiar with using Jira and Confluence in your workflow
              </li>
            </div>
          </div>
          {/* div-3 */}
          <div>
            <h1 className="font-semibold text-xl">Benefits : </h1>
            <div className="space-y-3 ml-5">
              <li>Competitive salary with performance-based bonuses.</li>
              <li>Opportunity to shape the company's marketing direction.</li>
              <li>Healthcare and retirement benefits.</li>
            </div>
          </div>
          <hr className="my-5 border border-cyan-500" />
          <div className="my-5">
            <h1 className="font-semibold text-2xl">Skills_____</h1>
            <div className="lg:flex gap-3 lg:ml-5 mt-3">
              <h1 className="bg-gray-200 font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-cyan-500">
                Html
              </h1>
              <h1 className="bg-gray-200 font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-cyan-500">
                Css
              </h1>
              <h1 className="bg-gray-200 font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-cyan-500">
                JavaScript
              </h1>
              <h1 className="bg-gray-200 font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-cyan-500">
                React
              </h1>
              <h1 className="bg-gray-200 font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-cyan-500">
                MongoDB
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostDesign;
