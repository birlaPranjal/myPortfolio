"use client";
import React, { useState } from "react";
import navLinks from "../../public/data/link"
import  {useRouter}  from "next/navigation";
import ViewCountWrapper from "./ViewCountWrapper";


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState<number>(0);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, path: string) => {
    e.preventDefault();
    if (path.startsWith('/#')) {
      const targetId = path.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      await router.push(path);
      if (path.includes('#')) {
        const targetId = path.split('#')[1];
        setTimeout(() => {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };


  return (
    <header className="py-4 shadow-md h-[3.8rem] top-0 bg-transparent z-50 font-mono">
      <div className="px-[3vw] mx-auto flex items-center justify-between">
        <div className="text-2xl md:text-4xl">Pranjal Birla</div>
        <nav className="gap-16 hidden sm:flex">
          {navLinks?.map((link) => (
            <li className="list-none z-50" key={link.title}>
              <a href={link.path} onClick={(e) => handleScroll(e, link.path)}>
                {link.title}
              </a>
            </li>
          ))}
        </nav>

        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {!isOpen ? (
              <div className='flex'>
              <div className="block sm:hidden">
          <div className="flex">
            <ViewCountWrapper/>
          </div>
        </div>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
                className="pt-2"
                fill="white"
              >
                <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
              </svg>
              </div>
              
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
            <div className="absolute bg-black shadow-md w-full top-[3.5rem] left-0 z-50">
              <nav className="flex flex-col justify-center items-center space-y-4 px-4 pt-6 pb-8">
                {navLinks?.map((link) => (
                  <li className="list-none z-50" key={link.title}>
                    <a href={link.path} onClick={(e) => handleScroll(e, link.path)}>
                      {link.title}
                    </a>
                    <hr className="w-full border-gray-700" />
                  </li>
                ))}
              </nav>
            </div>
          )}
        </div>
        <div className="hidden sm:block">
          <div className="flex">
            <ViewCountWrapper/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
