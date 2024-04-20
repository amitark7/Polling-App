import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-20 py-2 bg-blue-400">
      <ul className="flex gap-5 text-lg font-semibold cursor-pointer">
        <li>Polls</li>
        <li>Add Poll</li>
        <li>Create User</li>
        <li>List Users</li>
      </ul>
      <div className="flex items-center gap-2">
        <div className="text-4xl cursor-pointer">
          <FaUserCircle />
        </div>
        <div className="font-semibold">
          <h1 className="text-base ">Amit Ark</h1>
          <p>amitkumar@innotech.in</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
