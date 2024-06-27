"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview"; 
import {skills} from "../../public/data/skill";
import {education} from "../../public/data/education";

const EduSkill = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-[5vw] pt-5 ">
      {/* Education Section */}
      <div className="flex-1 lg:ml-6">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-6">
            <div className="flex"><edu.icon className="my-1 w-10"/><h3 className="text-xl font-semibold">{edu.institution}</h3></div>
            <span className="text-gray-300 ml-10">{edu.degree}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">{edu.duration}</span>
          </div>
        ))}
      </div>
      {/* Skills Section */}
      <div className="flex-1 lg:mr-6 mb-6 lg:mb-0 ">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="flex flex-wrap">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-[#00A7E1] text-white px-4 py-2 m-2 rounded-lg"
            >
            <LinkPreview url={skill.url} className="font-bold text-white">
                {skill.name}
              </LinkPreview>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EduSkill;
