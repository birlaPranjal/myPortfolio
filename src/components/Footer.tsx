import React from "react";
import Socials from "./Socials";
export default function Footer() {
  return (
    <div className= 'my-20'>
      <footer className=" w-[80vw] sm:w-[70vw] md:w-[55vw] lg:w-[50vw] xl:w-[40vw] mx-auto ">
        <div className="text-[1.5rem] text-center sm:hidden">
          Thankyou for Visiting
        </div>
        <div className="hidden sm:block  text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] text-left  ">
          ... Thankyou for
        </div>
        <div className="hidden sm:block text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] text-right ">
          Visiting ...
        </div>
      </footer>
      <div className="flex items-center justify-center">
      <Socials/>
      </div>
    </div>
  );
}
