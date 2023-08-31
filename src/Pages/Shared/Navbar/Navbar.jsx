import React, {useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaBell, FaHome, FaRegCommentDots, FaShoppingBag, FaUserAlt, FaUserFriends } from "react-icons/fa";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  // user logout function 
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="w-full bg-white shadow sticky z-30 top-0 left-0">
      <div className="justify-between px-5 mx-auto lg:max-w-screen-xl md:items-center md:flex sticky ">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div className="navbar-start ml-0">
            <Link to="/">
              <img className="h-10 md:h-full" src={logo} alt="" />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={` pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center text-center text-lg space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li>
              <Link to="/">
                <FaHome className="mx-auto"></FaHome>Home
              </Link>
            </li>

            {user ? (
              <li>
                <Link to="/mynetwork">
                  <FaUserFriends className="mx-auto"></FaUserFriends> My
                  Networks
                </Link>
              </li>
            ) : (
              ""
            )}

            {user ? (
              <li>
                <Link to="/jobsroute">
                  <FaShoppingBag s className="mx-auto"></FaShoppingBag> Jobs
                </Link>
              </li>
            ) : (
              ""
            )}
            {user ? (
              <li>
                <Link to="/massageroute">
                  <FaRegCommentDots s className="mx-auto"></FaRegCommentDots>
                  Messaging
                </Link>
              </li>
            ) : (
              ""
            )}
            <li>
              <Link to="/notifications">
                <FaBell className="mx-auto"></FaBell>
                Notifications
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <FaUserAlt className="mx-auto"></FaUserAlt> Profile
              </Link>
            </li>
            <li>
              {isAdmin && (
                <Link to="/dashbord">
                  <FaUserAlt className="mx-auto"></FaUserAlt> dashbord
                </Link>
              )}
            </li>
          </ul>
        </div>

        <div
          className={` pb-3 mt-8  md:block md:pb-0 md:mt-0  ${
            navbar ? "block" : "hidden"
          }`}
        >
          {user ? (
            <Link to="/login">
              <button
                onClick={handleLogOut}
                className="relative flex items-center justify-center text-lg mr-4 gap-2 px-5 py-2.5  bg-green-500 0 text-white rounded-lg shadow-md transition-all hover:shadow-lg  border-2 hover:border-green-500"
              >
                LogOut
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="relative flex items-center justify-center text-lg mr-4 gap-2 px-5 py-2.5  bg-green-500 rounded-lg shadow-md transition-all hover:shadow-lg border-2 text-white hover:border-green-500">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;