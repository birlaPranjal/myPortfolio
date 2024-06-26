import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import {skills} from "../../public/data/skills"

export default function Projects() {
  return (
    <div className="px-[5vw]">
      <HoverEffect items={skills} />
    </div>
  )
}
