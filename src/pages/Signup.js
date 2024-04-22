import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    roleId: "",
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const formOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleNavigate = () => {
    navigate("/");
    setShowModal(false);
  };
  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (userData.firstName.length < 6) {
      errors.firstName = "First name must be at least 6 characters.";
      isValid = false;
    }

    if (!userData.lastName.trim()) {
      errors.lastName = "Last name is required";
      isValid = false;
    }

    if (!userData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!userData.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (userData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    if (!userData.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm password is required";
      isValid = false;
    } else if (userData.password !== userData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (!userData.roleId) {
      errors.roleId = "Role is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}user/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );
        const jsonData = await response.json();
        if (jsonData) {
          setShowModal(true);
        }
      } catch (error) {
        setErrors({ ...errors, email: "Email already exists." });
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {showModal && (
        <div className="fixed inset-0 flex h-[200px] mt-4 justify-center z-10 text-black">
          <div className="modal-overlay fixed inset-0 bg-gray-500 opacity-50"></div>
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-6 text-left px-4">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold mb-3">Successfully !</p>
              </div>
              <p className="mb-3">
                User signup Succesfully ! Click Ok to Redirect Login Page.
              </p>
              <div className="mt-7 flex justify-end ">
                <button
                  onClick={handleNavigate}
                  className="px-4 py-2 text-gray-800 rounded-md bg-green-300 hover:bg-green-400"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="border bg-white w-[30%] shadow-lg py-4 px-5 text-center rounded-lg mx-auto mt-10">
        <h1 className="text-3xl font-semibold">Signup</h1>
        <form className="flex flex-col my-6 text-black text-left">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required={true}
            className={`w-full rounded-md py-3 pl-2 outline-none border-2 mt-2 ${
              errors.firstName ? "border-red-700" : ""
            }`}
            value={userData.firstName}
            onChange={(e) => formOnChange(e)}
          />
          {errors.firstName && (
            <p className="text-red-700 text-xs">{errors.firstName}</p>
          )}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={`w-full rounded-md py-3 pl-2 outline-none border-2 mt-3 ${
              errors.lastName ? "border-red-700" : ""
            }`}
            value={userData.lastName}
            onChange={(e) => formOnChange(e)}
          />
          {errors.lastName && (
            <p className="text-red-700 text-xs">{errors.lastName}</p>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            className={`w-full rounded-md py-3 pl-2 outline-none border-2 mt-3 ${
              errors.email ? "border-red-700" : ""
            }`}
            value={userData.email}
            onChange={(e) => formOnChange(e)}
          />
          {errors.email && (
            <p className="text-red-700 text-xs">{errors.email}</p>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={`w-full rounded-md py-3 pl-2 outline-none border-2 mt-3 ${
              errors.password ? "border-red-700" : ""
            }`}
            value={userData.password}
            onChange={(e) => formOnChange(e)}
          />
          {errors.password && (
            <p className="text-red-700 text-xs">{errors.password}</p>
          )}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className={`w-full rounded-md py-3 pl-2 outline-none border-2 mt-3 ${
              errors.confirmPassword ? "border-red-700" : ""
            }`}
            value={userData.confirmPassword}
            onChange={(e) => formOnChange(e)}
          />
          {errors.confirmPassword && (
            <p className="text-red-700 text-xs">{errors.confirmPassword}</p>
          )}
          <select
            name="roleId"
            id="roleId"
            className={`w-full rounded-md py-3 pl-2 outline-none border-2 mt-3 ${
              errors.role ? "border-red-700" : ""
            }`}
            onChange={formOnChange}
            value={userData.role}
          >
            <option value="">Select Role</option>
            <option value="1">Admin</option>
            <option value="2">User</option>
            <option value="3">Hr</option>
          </select>
          {errors.roleId && (
            <p className="text-red-700 text-xs">{errors.roleId}</p>
          )}
        </form>
        <button
          onClick={onFormSubmit}
          className="w-full bg-green-400 py-2 text-xl rounded-md mb-4 font-semibold"
        >
          Signup
        </button>
        <p className="text-base">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
