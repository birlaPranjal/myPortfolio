import React from 'react'
import { socials } from './../../public/data/socials';
import Image from "next/image";

export default function Socials() {
  return (
    <div className="text-white text-[.75rem] md:text-[1rem] flex items-center justify-evenly flex-wrap gap-4 px-[10vw] pt-[3vw] lg:pt-8">
        {socials.map((social , index )=>(
            <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 md:w-32"
          >
            <div className='flex items-center'>
            <div className = 'p-2 flex '>
            <Image src={social.svg} alt="no img" />
            <span className="ml-3 hidden sm:block">{social.name}</span>
            </div>
            </div>
          </a>
        ))}
    </div>
  )
}
