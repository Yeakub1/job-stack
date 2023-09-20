import{BiDollarCircle, BiMap} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom';
const JobCard = ({ items }) => {
const navigate = useNavigate();
  return (
    <div className="grid lg:grid-cols-2 dark:text-black gap-10 justify-items-center">
      {items?.map((item) => (
        <div key={item._id} className="w-full rounded-lg">
          <div className="shadow-lg w-full md:h-40 h-full p-4 md:p-6 mt-8 hover:shadow-2xl rounded-md bg-white card">
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-5">
              <div className="mb-4 md:mb-0 md:mr-4">
                <img className="h-20 w-20 border-2 p-1 border-gray-200" src={item?.image} alt="" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h1 className="md:text-2xl text-lg font-bold">
                  {item?.jobTitle}
                </h1>
                <h1>
                  <span className="font-semibold md:text-lg text-[15px]">
                    {item?.companyName}
                  </span>
                </h1>

                <div className="flex flex-col md:flex-row items-center gap-2">
                  <h1>{item?.workplace}</h1>
                  <h1 className="flex items-center gap-1">
                    <BiDollarCircle />
                    {item?.location}
                  </h1>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-center md:text-right">
                <div className="">
                  <Link onClick={() => navigate(`/jobApplyForm/${item?._id}`)}>
                    <button className="px-4 w-32 py-2 bg-[#09867E] text-white outline-0 rounded-md font-semibold">
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default JobCard;
