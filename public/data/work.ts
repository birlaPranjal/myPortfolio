import { StaticImageData } from 'next/image';
import teamify from '../assets/projects/teamify.png';
import designity from '../assets/projects/designity.png';
import clgJagat from '../assets/projects/clgjagat.png';
import ecomm from '../assets/projects/ecomm.png'
export const projects = [
  {
    title: "Teamify",
    img: teamify,
    tags: ["React", "Node", "CMS"],
    description: "A technology company that builds economic infrastructure for the internet.",
    link: "https://teamify.in",
  },
  {
    title: "Netflix",
    img: designity,
    tags: ["React", "Node", "CMS"],
    description: "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
];

export const personalProjects = [
  {
    title: "Designity",
    img: designity,
    tags: ["React", "Node", "CMS"],
    description: "A technology company that builds economic infrastructure for the internet.",
    link: "https://designity-k2hel3j8g-pranjal-birlas-projects.vercel.app/",
  },
  {
    title: "Ecomerce App",
    img: ecomm,
    tags: ["React", "Node", "CMS"],
    description: "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://e-comm-m3shuxq49-pranjal-birlas-projects.vercel.app/",
  },
  {
    title: "College Jagat",
    img:clgJagat ,
    tags: ["React", "Node", "CMS"],
    description: "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://college-jagat-frontend.vercel.app/",
  },
]