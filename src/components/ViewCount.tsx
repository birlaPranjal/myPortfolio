import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import AnimatedNumbers from "react-animated-numbers";
import axios from "axios";

interface ViewCountProps {
  formatCount?: (count: number) => string;
}

const ViewCount: React.FC<ViewCountProps> = ({ formatCount }) => {
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

  // Format count with "k" notation
  const formatViewCount = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  // Use provided format function or default one
  const displayCount = formatCount ? formatCount(count) : formatViewCount(count);

  return (
    <div className="flex items-center space-x-2">
      <FaEye className="text-xl" />
      <div className='text-[1rem] md:text-[1.4rem]'>{displayCount}</div>
    </div>
  );
};

export default ViewCount;