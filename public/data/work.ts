import { StaticImageData } from 'next/image';
import teamify from '../assets/projects/teamify.png';
import designity from '../assets/projects/designity.png';
import clgJagat from '../assets/projects/clgjagat.png';
import ecomm from '../assets/projects/ecomm.png'
import abhyu from '../assets/projects/abhyu.png'
import movie from '../assets/projects/movie.png'
import hoon from '../assets/projects/hoon.png'
import market from '../assets/projects/market.png'


export const projects = [
  {
    title: "Teamify",
    img: teamify,
    tags: ["NextJS", "SEO", "HeadlessCMS"],
    description: "Teamify: Outsource skilled Indian tech talent for your projects.",
    link: "https://teamify.in",
  },
  {
    title: "Abhyudaya",
    img: abhyu,
    tags: ["NextJS","FramerMotion "],
    description: "Culbs Official website.",
    link: "https://pranjalbirla.tech/",
  },
];

export const personalProjects = [
  {
    title: "Designity",
    img: designity,
    tags: ["Acertinity UI", "Next-Auth", "JWT"],
    description: "Designing Compition Platform for students to showcase their skills.",
    link: "https://designity-k2hel3j8g-pranjal-birlas-projects.vercel.app/",
  },
  {
    title: "Ecomerce App",
    img: ecomm,
    tags: ["Redux", "React", "GSAP"],
    description: "E commerce app with redux cart feature and GSAP animations.",
    link: "https://e-comm-m3shuxq49-pranjal-birlas-projects.vercel.app/",
  },
  {
    title: "Designer marketplace",
    img:market ,
    tags: ["FramerMotion", "ScrollTrigger", "UI Clone"],
    description: "A template library built with high precision and the best UI/UX practices in mind so you'll always find the perfect template for your next big idea.​",
    link: "https://pranjalbirla.tech/",
  },
  {
    title: "College Jagat",
    img:clgJagat ,
    tags: ["React", "NodeMailer", "REST API"],
    description: "Onestop all college information platform for students.",
    link: "https://college-jagat-frontend.vercel.app/",
  },
  {
    title: "Movie Villa",
    img:movie ,
    tags: ["React", "NodeMailer", "REST API"],
    description: "Moovie Villa: A platform to search movies and web series and get details about them.",
    link: "https://pranjalbirla.tech/",
  },
  {
    title: "HoonBank Clone",
    img:hoon ,
    tags: ["Vite", "Figma", "UI Clone"],
    description: "The next generation payment method platform UI Clone and animations.",
    link: "https://pranjalbirla.tech/",
  },
]