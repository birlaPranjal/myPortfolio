// components/ViewCount.tsx
import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import AnimatedNumbers from "react-animated-numbers";
import axios from "axios";

const ViewCount: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get("/api/views");
        setCount(response.data.count);
      } catch (error) {
        console.error("Error fetching view count:", error);
      }
    };

    const incrementCount = async () => {
      try {
        await axios.post("/api/views", { count: count + 1 });
      } catch (error) {
        console.error("Error updating view count:", error);
      }
    };

    fetchCount();
    incrementCount();
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <FaEye className="text-xl" />
      <AnimatedNumbers
        animateToNumber={count}
        fontStyle={{ fontSize: 20 }}
      />
    </div>
  );
};

export default ViewCount;