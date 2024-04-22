import React, { useState } from "react";
import PollItem from "../component/PollItem";

const PollsPage = () => {
  const [pollList, setPollList] = useState([
    {
      title: "Hey Amit",
      options: ["Yes", "No"],
    },
    {
      title: "Who is the Winner",
      options: ["Main", "Tum"],
    },
    {
      title: "Ram jitega ya nhi",
      options: ["Haa", "Nhi"],
    },
  ]);
  return pollList.map((poll, index) => {
    return <PollItem key={index} poll={poll} />;
  });
};

export default PollsPage;
