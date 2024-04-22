import React, { useEffect, useState } from "react";
import PollItem from "../component/PollItem";

const PollsPage = () => {
  const [pollList, setPollList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchPolls = async (userToken) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}poll/list/${pageNumber}?limit=10`,
      {
        method: "GET",
        headers: {
          token: `${userToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const jsonData = await response.json();
    if (jsonData) {
      setPollList(jsonData.rows);
    }
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    if (user) {
      fetchPolls(user);
    }
  });

  return pollList?.map((poll, index) => {
    return <PollItem key={index} poll={poll} />;
  });
};

export default PollsPage;
