import React, { useEffect, useState } from "react";
import PollItem from "../component/PollItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchPolls } from "../redux/reducer/pollReducer";

const PollsPage = () => {
  const [pollList, setPollList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { poll } = useSelector((state) => state.poll);
  const dispatch = useDispatch();
  console.log(poll);
  useEffect(() => {
    dispatch(fetchPolls(pageNumber));
  }, [pageNumber]);

  return (
    <div>
      <button onClick={() => setPageNumber(pageNumber + 1)}>PageNumber</button>
      {/* {pollList?.map((poll, index) => {
        return <PollItem key={index} poll={poll} />;
      })} */}
    </div>
  );
};

export default PollsPage;
