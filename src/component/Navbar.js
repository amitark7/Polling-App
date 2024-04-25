import React, { useEffect, useState } from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  const [userData, setUserData] = useState({});
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserData(user);
    }
  }, []);

  return (
    <div className="bg-blue-400">
      <div className="flex justify-between items-center px-6 md:px-20 py-2">
        <div className="flex items-center">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="block md:hidden text-white focus:outline-none"
          >
            <FaBars />
          </button>
          <Link
            to="/polling"
            className="text-white text-lg font-semibold ml-2 md:ml-0"
          >
            Polls
          </Link>
          {userData.roleId === 1 && (
            <>
              <Link
                to="/addpoll"
                className="text-white text-lg font-semibold ml-4"
              >
                Add Poll
              </Link>
              <Link
                to="/createuser"
                className="text-white text-lg font-semibold ml-4"
              >
                Create User
              </Link>
              <Link
                to="/users"
                className="text-white text-lg font-semibold ml-4"
              >
                List Users
              </Link>
            </>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div className="text-white text-lg font-semibold">
            <h1>{`${userData.firstName} ${userData.lastName}`}</h1>
            <p>{userData.email}</p>
          </div>
          <button
            onClick={onLogout}
            className="text-white text-lg font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden bg-blue-400 py-2 px-4">
          <ul>
            <li>
              <Link
                to="/polling"
                className="text-white text-lg font-semibold block py-1"
              >
                Polls
              </Link>
            </li>
            {userData.roleId === 1 && (
              <>
                <li>
                  <Link
                    to="/addpoll"
                    className="text-white text-lg font-semibold block py-1"
                  >
                    Add Poll
                  </Link>
                </li>
                <li>
                  <Link
                    to="/createuser"
                    className="text-white text-lg font-semibold block py-1"
                  >
                    Create User
                  </Link>
                </li>
                <li>
                  <Link
                    to="/users"
                    className="text-white text-lg font-semibold block py-1"
                  >
                    List Users
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
