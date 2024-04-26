import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";

const PollItem = ({ poll }) => {
  const [userData, setUserData] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [voted, setVoted] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmitVote = (e) => {
    e.preventDefault();
    if (selectedOption) {
      console.log("Vote for Options", selectedOption);
      setVoted(true);
    }
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserData(user);
    }
  });
  return (
    <div className="w-[70%] mx-auto mt-8 p-8 bg-gray-100 rounded shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{poll.title}</h2>
        {userData.roleId === 1 && (
          <div className="flex gap-4">
            <FaTrashAlt className="text-red-500 cursor-pointer" />
            <FaEdit className="text-blue-500 cursor-pointer" />
            <FaEye className="text-green-500 cursor-pointer" />
          </div>
        )}
      </div>
      <form onSubmit={handleSubmitVote}>
        {poll.optionList?.map((option, index) => (
          <div key={index} className="mb-2">
            <input
              type="radio"
              id={`option${index}`}
              name="pollOption"
              value={option.optionTitle}
              checked={selectedOption === option.optionTitle}
              onChange={handleOptionChange}
            />
            <label htmlFor={`option${index}`} className="ml-2">
              {option.optionTitle}
            </label>
          </div>
        ))}
        {!voted && (
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        )}
      </form>
      {voted && <p className="mt-4">Thank you for voting!</p>}
    </div>
  );
};

export default PollItem;
