import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import {skills} from "../../public/data/work"

export default function Projects() {
  return (
    <div className="px-[5vw]">
      <div className='text-2xl font-bold'>Work & Experience</div>
      <HoverEffect items={skills} />
    </div>
  )
}
