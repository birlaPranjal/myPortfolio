"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Socials from "./Socials";

export default function Footer() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: '-100vw', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 }
    }
  };

  const rightItemVariants = {
    hidden: { x: '100vw', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 }
    }
  };

  const socialsVariants = {
    hidden: { y: '20vh', opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="my-20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <footer className="w-[80vw] sm:w-[70vw] md:w-[55vw] lg:w-[50vw] xl:w-[40vw] mx-auto text-black dark:text-white">
        <motion.div
          variants={itemVariants}
          className="text-[1.5rem] text-center sm:hidden"
        >
          Thank you for Visiting
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="hidden sm:block text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] text-left"
        >
          ... Thank you for
        </motion.div>
        <motion.div
          variants={rightItemVariants}
          className="hidden sm:block text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] text-right"
        >
          Visiting ...
        </motion.div>
      </footer>
      <motion.div
        variants={socialsVariants}
        className="flex items-center justify-center"
      >
        <Socials />
      </motion.div>
    </motion.div>
  );
}