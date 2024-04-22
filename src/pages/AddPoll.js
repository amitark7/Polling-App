import React, { useState } from "react";

const AddPoll = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleRemoveOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission logic
    console.log("Question:", question);
    console.log("Options:", options);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-gray-100 rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Create Poll</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="question" className="block mb-1">
            Question
          </label>
          <input
            type="text"
            id="question"
            className="w-full px-4 py-2 border rounded"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Options</label>
          {options.map((option, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded mr-2"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
              <button
                type="button"
                className="px-3 py-1 bg-red-500 text-white rounded"
                onClick={() => handleRemoveOption(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="px-3 py-1 bg-green-500 text-white rounded"
            onClick={handleAddOption}
          >
            Add Option
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPoll;
