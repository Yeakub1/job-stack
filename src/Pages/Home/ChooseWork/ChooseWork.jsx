import React from "react";
import { FaPaperPlane, FaSearch, FaUser } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import Work from "./work";


const ChooseWork = () => {
  return (
      <div className="banner py-14 md:py-20">
            <h1 className="md:text-4xl px-2 md:px-0 text-center text-2xl mb-3 uppercase mt-6 text-transparent bg-clip-text  bg-gradient-to-r from-white to-yellow-400 font-bold">
              JOBS Working Process
            </h1>
            <p className="text-center px-2 md:px-0 text-white md:text-xl mb-5 ">
              To choose your trending job dream & to make future bright.
            </p>
          <div>
            <div className="grid md:grid-cols-4 lg:gap-5 gap-2 py-10 px-3 md:px-16 ">
              <Work
                titles={"Account Create"}
                icon={<FaUser className="text-4xl my-2" />}
                description={
                  "Create a account as Employer or a Candidate for free."
                }
              />
              <Work
                titles={"Find Jobs"}
                icon={<FaSearch className="text-4xl my-2" />}
                description={
                  "Browse throught positions to find the right job for you."
                }
              />
              <Work
                titles={" Apply Jobs"}
                icon={<FaPaperPlane className="text-4xl my-2" />}
                description={
                  "Apply to a job with your resume and change your Career."
                }
              />
              <Work
                titles={"Job Notifications"}
                icon={<BsBellFill className="text-4xl my-2" />}
                description={
                  " Gain a business in the most advanced IoT solutions."
                }
              />
            </div>
          </div>
        </div>
  );
};

export default ChooseWork;
