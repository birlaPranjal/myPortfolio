"use client";
import React from "react";
import Image from "next/image";
import img from "../../public/assets/rem-bg.png";
import image from "../../public/assets/image.jpg";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Projects from "@/components/Projects";
import {FlipWords} from "@/components/ui/flip-words"
import Socials from "@/components/Socials"
import EduSkill from "@/components/EduSkill";
import {About} from "@/components/About";




export default function Home() {
  const words = ["MERN", "Full"];
  const resumeLink = "https://drive.google.com/file/d/1VeQcs1VgYstEHx8EL5eIqbuazS8JsmPR/view?usp=sharing"; 
  return (
    <>
    <div className="">
    <Image src={image} alt="abc" className="md:hidden px-10 pt-5 w-[70vw] sm:w-[60vw] h-[45vw] min-w-[350px] min-h-[300px] mx-auto rounded-2xl" />
    </div>
    <div className="px-[5vw] font-mono pt-[3vw] md:pt-[2vw]">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-7/12">
          <div className="text-[3rem] sm:text-[3.5rem] lg:text-[5.3rem] lg:pl-[2vw]">
          <FlipWords words={words} />-Stack
          </div>
          <div className="text-[3rem] sm:text-[3.5rem] lg:text-[5.3rem] -mt-5 md:-mt-9 lg:-mt-14 min-ml-[9vw] ml-[20vw] sm:ml-[30vw]">
            Developer
          </div>
          <div className="font-playwrite text-[1rem] sm:text-[1.12rem] lg:text-[1.25rem] pt-[12vw] md:pt-14 -mt-[10vw] md:-mt-[12vw] lg:-mt-[10vw] xl:lg:-mt-[9vw] md:w-[28vw] lg:pl-[2vw] font-playwriteNgModern">
            My goal is to write maintainable, clean code to build scalable and efficient applications.
          </div>
          <div className="flex justify-center md:absolute left-[40vw] xl:left-[37vw] md:top-[25vw] xl:top-[23vw] top-[30vw]"> 
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#00A7E1] text-white text-[1.1rem] sm:text-[1.2rem] lg:text-[1.3rem] px-4 py-2 mt-8 rounded-md">
                  Download Resume
                </button>
          </a>
            
          </div>
        </div>
        <div className="hidden md:block w-5/12">
          <Image src={img} alt="abc" className="md:ml-[3rem] lg:ml-[5rem] xl:ml-[3rem] max-h-[550px] w-[400px] -mt-20" />
        </div>
      </div>
      <hr className="mt-5 md:mt-0"/>
      <Socials/>
    </div>
    <div>
      <BackgroundBeams className="-z-10"/>
    </div>
    <EduSkill/>
    
    <Projects/>
    <About/>
    <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playwrite+AU+SA:wght@100..400&family=Playwrite+NG+Modern&display=swap');
import { CardStackDemo } from './../components/Certificate-stack';
import Home from './page';

        .font-playwrite {
          font-family: "Playwrite AU SA";
        }
      `}</style>
    </>
  );
}
