import React, { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const formOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Hey Amit");
  };
  return (
    <div className="border bg-blue-600 w-[25%] py-10 px-5 text-center rounded-lg mx-auto mt-20 text-white">
      <h1 className="text-3xl font-semibold">Login</h1>
      <form onSubmit={onFormSubmit} className="flex flex-col gap-4 my-6">
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          className="w-full rounded-md py-3 pl-2 outline-none"
          value={userData.email}
          onChange={(e) => formOnChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full rounded-md py-3 pl-2 outline-none"
          value={userData.password}
          onChange={(e) => formOnChange(e)}
        />
      </form>
      <button
        type="submit"
        className="w-full bg-red-400 py-2 text-xl rounded-md mb-4 font-semibold"
      >
        Login
      </button>
      <p className="text-base">
        Don't have an account? <a href="/">Register</a>
      </p>
    </div>
  );
};

export default Login;
