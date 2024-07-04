import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import { projects } from "../../public/data/work"
import { personalProjects } from "../../public/data/work"

export default function Projects() {
  const convertedProjects = projects.map(project => ({
    ...project,
    img: project.img.src 
  }));
  const convertedpersonalProjects = personalProjects.map(personalProjects => ({
    ...personalProjects,
    img: personalProjects.img.src 
  }));

  return (
    <div className="px-[5vw]">
      <div className='text-2xl font-bold'>Work & Experience</div>
      <HoverEffect items={convertedProjects} />
      <div className='text-2xl font-bold'>Minor Projects</div>
      <HoverEffect items={convertedpersonalProjects} />
    </div>
  )
}
