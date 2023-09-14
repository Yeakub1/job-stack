import React, { useState } from "react";
import { useParams } from "react-router-dom";
import JobCard from "./JobCard";
import useJobs from "../../../../Hooks/useJobs";
import "./job.css";

const LatestJobs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const categories = ["Remote", "Onsite"];
  const { workplace } = useParams();
  const [job] = useJobs();
  const initialIndex = categories.indexOf(workplace);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const remote = job.filter((item) => item.workplace === "Remote");
  const onsite = job.filter((item) => item.workplace === "Onsite");
  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  return (
    
    <div className="banner lg:px-12">
      <div className="banner ">
      <div className="text-center banner  ">
        <h1 className="text-4xl uppercase font-bold text-transparent bg-clip-text  bg-gradient-to-r from-white to-yellow-400 ">Latest Jobs</h1>
        <p className="mt-2 mb-4 text-white lg:px-0 text-lg">
          Discover a world of career possibilities with our latest job openings.
        </p>
      </div>
      <div className="banner">
        <ul
          className="tabs text-xl banner font-semibold"
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <li
            className={activeTab === 1 ? "active " : "tabbuttonactive"}
            onClick={() => handleTabClick(1)}
          >
            Remote
          </li>
          <li
            className={activeTab === 2 ? "active " : "tabbuttonactive"}
            onClick={() => handleTabClick(2)}>
            Onsite
          </li>
        </ul>
        <div className="tab-content banner py-8">
          {activeTab === 1 && (

            <div className="tab_panel banner">
              <JobCard items={remote}></JobCard>
            </div>

          )} 
         {activeTab === 2 && (
           
              <div className="tab_panel banner">
                <JobCard items={onsite}></JobCard>
              </div>
          )}
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default LatestJobs;
