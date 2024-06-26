"use client";
import React, { useState } from "react";
import navLinks from "../../public/data/link";
import AnimatedNumbers from "react-animated-numbers";

export default function Header() {
  const [views, setViews] = useState(1123);
  return (
    <div className="border px-[5vw] ">
      <header className="flex items-center justify-between">
        <div>Pranjal Birla</div>

        <div className="">
          {navLinks.map((link) => (
            <a href={link.path} key={link.title}>
              {link.title}
            </a>
          ))}
        </div>

        <div>
         
          <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: "number",
              duration: index + 0.3,
            })}
            animateToNumber={views}  
          />
        </div>
      </header>
    </div>
  );
}
