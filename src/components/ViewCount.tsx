import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import AnimatedNumbers from "react-animated-numbers";
import axios from "axios";

const ViewCount: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [hasUpdated, setHasUpdated] = useState<boolean>(false);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        console.log("Fetching count...");
        const response = await axios.get("/api/views");
        console.log("Fetched count:", response.data.count);
        setCount(response.data.count);
      } catch (error) {
        console.error("Error fetching view count:", error);
      }
    };

    const updateCount = async () => {
      try {
        const response = await axios.post("/api/views");
        setCount(response.data.count);
        setHasUpdated(true);
      } catch (error) {
        console.error("Error updating view count:", error);
      }
    };

    if (!hasUpdated) {
      updateCount();
    } else {
      fetchCount();
    }
  }, [hasUpdated]);


  return (
    <div className="flex items-center space-x-2">
      <FaEye className="text-xl" />
      {/* <AnimatedNumbers
        animateToNumber={count}
        fontStyle={{ fontSize: 20 }}
      /> */}
      <div className='text-[1.4rem]'>{count}</div>
    </div>
  );
};

export default ViewCount;