import {
  FaCloudsmith,
  FaCommentAlt,
  FaHandPointDown,
  FaRegBookmark,
  FaShare,
  FaShareAlt,
  FaSortNumericDownAlt,
} from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { BiDollarCircle } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
// import useJobsBooksMarks from "../../../Hooks/useJobsBooksMarks";
const BookMarkJobs = ({ bookJobs }) => {
  //   const [handleBookMark] = useJobsBooksMarks();
  const navigate = useNavigate();
  // console.log(bookJobs);
  const { user } = useContext(AuthContext);

  console.log(bookJobs);

  return (
    <div className="grid grid-cols-1">
      <div className=" bg-white shadow-lg rounded-md mt-5 p-6 border border-purple-500">
        <div className="flex justify-end gap-2 mb-3 text-xl">
          <FaShareAlt className="cursor-pointer" />
          <FaRegBookmark
            // onClick={() => handleBookMark(bookJobs)}
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center mb-5">
          <div>
            <div className="flex items-center gap-3">
              <img
                className="h-16 w-16 border  border-blue-500 rounded-full"
                src={bookJobs?.userPhoto}
                // src=""
                alt="img"
              />
              <div>
                <h1 className="font-semibold ">
                  Front-End Developer{bookJobs?.position}
                </h1>
                {/* <h1>5 Days Left</h1> */}
                <h1 className="font-bold text-gray-600">
                  {moment().format("MMMM Do YYYY")}
                </h1>
              </div>
            </div>

            <div className="px-2 py-1 rounded-md">
              {/* <h1 className="font-semibold">Workplace</h1> */}
              <h1 className="bg-gray-200 w-[300px] mt-3 text-center font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-purple-700">
                {bookJobs?.workplace}
              </h1>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={bookJobs?.image}
              alt="Company Logo"
              className="w-20 h-20 rounded-md mr-4 border border-gray-400"
            />
            <div>
              <h2 className=" font-semibold text-gray-800">
                {bookJobs?.jobTitle}
              </h2>
              <p className="text-gray-600 ">{bookJobs?.companyName}</p>
              <p>{bookJobs?.location}</p>
            </div>
          </div>
        </div>
        {/* quatitiy div */}
        <div className="flex justify-between items-center">
          <div className="w-1/2 flex gap-9">
            <div className="space-y-1">
              <h1 className="flex items-center gap-1">
                <BiDollarCircle /> Salary : ${bookJobs?.salary}/month
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
          <div className="w-1/2 justify-end flex items-center gap-3 ">
            <FaRegBookmark className="text-3xl cursor-pointer" />
            <button
              onClick={() => navigate(`/jobApplyForm/${bookJobs?._id}`)}
              className="bg-blue-600 text-center text-white py-2 px-6 rounded-md hover:bg-blue-800  duration-300 w-1/2   bg-gradient-to-r from-blue-500 to-blue-700  font-semibold   hover:from-blue-700 hover:to-purple-900 transition-all "
            >
              Apply Now
            </button>
          </div>
        </div>
        <hr className="my-5 border border-purple-500" />

        {/* workplace, Location, Job Category */}

        {/* description div */}
        <div>
          {/* div-1 */}
          <div>
            <h3 className=" flex items-center gap-3 my-5 text-3xl font-semibold text-gray-800">
              Descriptions <FaHandPointDown />
            </h3>
            <h1 className="font-semibold text-xl">Overview:</h1>
            <p className="text-gray-600">{bookJobs?.jobDescription}</p>
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
          <hr className="my-5 border border-purple-500" />
          <div className="my-5">
            <h1 className="font-semibold text-2xl">Skills_____</h1>
            <div className="flex gap-3 ml-5 mt-3">
              <h1 className="bg-gray-200 font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-purple-700">
                Html
              </h1>
              <h1 className="bg-gray-200 font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-purple-700">
                Css
              </h1>
              <h1 className="bg-gray-200 font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-purple-700">
                JavaScript
              </h1>
              <h1 className="bg-gray-200 font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-purple-700">
                React
              </h1>
              <h1 className="bg-gray-200 font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-purple-700">
                MongoDB
              </h1>
            </div>
          </div>
        </div>

        {/* <div>
          <h3 className=" flex items-center gap-3 mt-5 font-semibold text-gray-800">
            Job Descriptions <FaHandPointDown />
          </h3>
          <p className="text-gray-600">{bookJobs?.jobDescription}</p>
        </div> */}
        <div className="md:flex justify-between gap-3 mt-8">
          <div className="md:flex items-center gap-8">
            {/* <div className="mb-4 px-2 py-1 rounded-md">
              <h1 className="font-semibold">Workplace</h1>
              <p>{bookJobs?.workplace}</p>
            </div> */}

            {/* <div className="mb-4 px-2 py-1 rounded-md">
              <h1 className="font-semibold">Locations</h1>
              <p>{bookJobs?.location}</p>
            </div> */}
            {/* <div className="mb-4 px-2 py-1 rounded-md">
              <h1 className="font-semibold">Job-Category</h1>
              <p>{bookJobs?.jobCategory}</p>
            </div> */}
            {/* <div className="mb-4 px-2 py-1 rounded-md">
              <h2 className="font-semibold">Salary</h2>
              <p> ${bookJobs?.salary}/per year</p>
            </div> */}
          </div>
        </div>

        {/* <JobApplyForm bookJobs={bookJobs}></JobApplyForm> */}

        {/* <button
          onClick={() => navigate(`/jobApplyForm/${bookJobs?._id}`)}
          className="bg-green-500 text-center mt-5 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-300 w-full"
        >
          Apply Now
        </button> */}

        {/* <div className="flex bottom-0 justify-around  bg-gray-50 py-3 rounded-md">
          <div className="flex items-center gap-2 cursor-pointer">
            <FcLike /> Like
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FaCommentAlt /> Comment
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FaShare /> Share
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BookMarkJobs;
