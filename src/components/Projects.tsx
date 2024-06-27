import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import {skills} from "../../public/data/skills"

export default function Projects() {
  return (
    <div className="px-[5vw]">
      <div className='text-2xl font-bold'>Experience</div>
      <HoverEffect items={skills} />
    </div>
  )
}
