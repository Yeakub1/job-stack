import { useState } from "react";
import useJobPost from "../../Hooks/useJobPost";
import { useNavigate, useParams } from "react-router-dom";

const EveryOneSerchJob = () => {
  const [active, setActive] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [jobposts] = useJobPost();
  console.log(jobposts);

  const { id } = useParams();

  const navigate = useNavigate();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categoryOnlyData = getUniqueData(jobposts, "jobCategory");
  const handleFilter = (posts) => {
    if (searchText) {
      if (posts?.jobTitle?.toLowerCase()?.includes(searchText?.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    } else return true;
  };

  return (
    <div className="banner px-5 py-24">
      <h1 className="lg:text-6xl  text-3xl font-bold text-center text-white my-8">
        Find Your Career. You Deserve it.
      </h1>
      {/* job category ways filter */}
      <form className="flex justify-center items-center mt-10 mb-20 md:flex-row gap-3 ">
        <div
          className="flex w-full lg:w-1/3 
                 relative"
        >
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type="text"
            placeholder="Search your jobs title"
            className="w-full md:w-full px-3  h-12 rounded-md dark:text-black border-2 border-blue-500 focus:outline-none focus:blue-green-700"
          />
        </div>
        <div>
          <select
            id="jobCategory"
            name="jobCategory"
            className="h-12 w-full border-2 cursor-pointer border-blue-500 dark:text-black focus:outline-none focus:blue-green-500 rounded px-2 md:px-2 py-0 md:py-1 tracking-wider"
            onChange={(e) => setActive(e.target.value)}
            value={active}
          >
            {categoryOnlyData.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </form>

      {/* job data display */}
      {jobposts ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center px-10 py-10">
          {jobposts
            .filter(handleFilter)
            .filter((post) => {
              if (active === "All") {
                return true;
              }
              return post.jobCategory === active;
            })
            .map((posts) => (
              <div
                key={posts._id}
                className="card w-full bg-base-100 shadow-xl"
              >
                <div>
                  <div className="flex justify-around items-center mt-6">
                    <div className="w-16 h-16  border ">
                      <img
                        onClick={() => navigate(`/dynamicprofile/${id}`)}
                        className="w-16 h-16  rounded-full"
                        src={posts?.image}
                        alt="companylogo"
                      />
                    </div>
                    <div>
                      <p>{posts?.companyName}</p>
                      <p>{posts?.location}</p>
                    </div>
                  </div>
                  <div className="card-body ml-10">
                    <h2 className="card-title ">{posts?.jobTitle}</h2>
                    <h5 className=" text-blue-500">{posts?.workplace}</h5>
                    <h6>HTML, CSS, JavaScript, React</h6>
                    <div className="card-actions justify-center">
                      <div className="flex gap-10 justify-between items-center">
                        <div>
                          <h1>
                            ${posts?.salary}/
                            <span className="text-xs">monthly</span>
                          </h1>
                        </div>
                        <div className="pr-3">
                          {" "}
                          <button
                            onClick={() => navigate(`/dynamic/${posts?._id}`)}
                            className="btn text-white banner"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <p>LOding,,,,,,</p>
      )}
    </div>
  );
};

export default EveryOneSerchJob;
