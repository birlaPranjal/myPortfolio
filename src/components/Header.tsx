"use client";
import React, { useState } from "react";
import navLinks from "@/../public/data/link";

import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [views, setViews] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-4 shadow-md h-[3.8rem] top-0 bg-light z-10 font-mono">
      <div className="px-[3vw] mx-auto flex items-center justify-between">
        <div className="text-2xl md:text-4xl  ">Pranjal Birla</div>
        <nav className="gap-16 hidden sm:flex">
          {navLinks?.map((link) => (
            <li className="list-none" key={link.title}>
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </nav>
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
                className="pt-2 "
                fill="white"
              >
                <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                className="pt-2"
                viewBox="0 0 40 50"
                fill="white"
              >
                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
              </svg>
            )}
          </button>

          {isOpen && (
            <div className="absolute text-dark bg-light shadow-md-b w-full top-[3.5rem] shadow-md left-0 z-50">
              <nav className="flex flex-col justify-center items-center space-y-4 px-4 pt-6 pb-8">
                {navLinks?.map((link) => (
                  <li className="list-none" key={link.title}>
                    <Link href={link.path}>{link.title}</Link>
                  </li>
                ))}
              </nav>
            </div>
          )}
        </div>
        <div className="hidden md:block">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="currentColor"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div>Indore</div>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
