"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

let interval: any;

export type Card = {
  id: number;
  image: string;
};

export const CardStack = ({
  images,
  offset,
  scaleFactor,
}: {
  images: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(images);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 2000);
  };

  return (
    <div className="relative h-60 w-96 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute h-60 w-[80vw] mx-auto max-w-96 md:h-60 md:w-96 rounded-3xl shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex justify-center items-center overflow-hidden"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, // decrease z-index for the cards that are behind
            }}
          >
            <img src={card.image} alt={`Card ${card.id}`} className=" h-full w-full" />
          </motion.div>
        );
      })}
    </div>
  );
};
