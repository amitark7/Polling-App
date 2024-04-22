import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [userData, setUserData] = useState({});
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("user"));
    if (getUser) {
      setUserData(getUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setShowLogoutModal(false);
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-2 bg-blue-400">
      <ul className="flex flex-col md:flex-row gap-5 text-lg font-semibold cursor-pointer md:items-center">
        <li>
          <Link to={"/polling"}>Polls</Link>
        </li>
        <li>
          <Link to={"/addpoll"}>Add Poll</Link>
        </li>
        <li>
          <Link to={"/createuser"}>Create User</Link>
        </li>
        <li>
          <Link to={"/users"}>List Users</Link>
        </li>
      </ul>
      <div className="relative">
        <div
          className="flex items-center gap-2"
          onClick={() => setShowLogoutModal(true)}
        >
          <div className="text-4xl cursor-pointer">
            <FaUserCircle />
          </div>
          <div className="font-semibold">
            <h1 className="text-base">{`${userData.firstName} ${userData.lastName}`}</h1>
            <p>{userData.email}</p>
          </div>
        </div>
        {showLogoutModal && (
          <div className="absolute right-0 bg-white p-4 shadow-md rounded-md">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-10 py-2 rounded-md mr-2"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
