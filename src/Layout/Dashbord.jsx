import React, { useContext } from "react";
import { AiFillHome, AiFillMessage, AiFillShopping } from "react-icons/ai";
import {
  FaUserCircle,
  FaUserFriends,
  FaUsers,
  FaUserAstronaut,
} from "react-icons/fa";
import { TbBrandGooglePhotos } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import images from '../assets/logo/logo.png'
import ActiveLink from "../Hooks/ActiveLink";

const Dashbord = () => {
  const { user } = useContext(AuthContext);
 const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-20 py-5">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Dashbord
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 banner  min-h-full text-white text-xl font-semibold">
            <div className="flex flex-col items-center mt-6 mb-5 -mx-2">
              <img
                className="object-cover w-24 h-24 mx-2 m-5 rounded-full"
                src={images}
                alt="avatar"
                draggable="false"
              />
              <Link to="/profile">
                <h4 className="mx-2 mt-2 font-medium text-white hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
            </div>
            {/* Sidebar content here */}
            <>
              <ActiveLink to="/dashbord/adminhome/">
                <li>
                  <a>
                    <MdDashboard />
                    Dashboard
                  </a>
                </li>
              </ActiveLink>
              <Link to="/dashbord/alluser">
                <li>
                  <a>
                    <FaUsers />
                    Manage User
                  </a>
                </li>
              </Link>
              <Link to="/dashbord/userreport">
                <li>
                  <a>
                    <FaUserAstronaut />
                    User Report
                  </a>
                </li>
              </Link>
              <Link to="/dashbord/news-articles">
                <li>
                  <a>
                    <TbBrandGooglePhotos />
                    NewsArticles
                  </a>
                </li>
              </Link>
            </>
            <hr className="bg-gray-400 my-5" />
            <>
              <Link to="/">
                <li>
                  <a>
                    <AiFillHome />
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/mynetwork">
                <li>
                  <a>
                    <FaUserFriends />
                    My Networks
                  </a>
                </li>
              </Link>
              <Link to="/jobsroute">
                <li>
                  <a>
                    <AiFillShopping />
                    Jobs
                  </a>
                </li>
              </Link>
              <Link to="/massageroute">
                <li>
                  <a>
                    <AiFillMessage />
                    Messaging
                  </a>
                </li>
              </Link>
              <Link to="/profile">
                <li>
                  <a>
                    <FaUserCircle />
                    Profile
                  </a>
                </li>
              </Link>
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
